import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import { getWeather } from '../redux/actions/index';
import Loading from './Loading';
// materialui stuff
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));
function WeatherInfo({weather, getWeather}){
    const classes = useStyles;

    useEffect(() => {
        getWeather();
    }, [getWeather]);

    const isFetchingWeather = weather.isLoading;

    if(!isFetchingWeather){
        return(
            <div className={classes.heroContent}>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {weather.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Temp: <br/>{card.main.temp}&deg;K
                                        </Typography>
                                        <Typography>
                                            Date: <br/>{card.dt_txt}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </div>     
        )
    }else{
        return <Loading /> 
    }

}

WeatherInfo.propTypes = {
    weather: PropTypes.instanceOf(Object).isRequired,
    getWeather: PropTypes.func.isRequired, 
}

const mapStateToProps = state => ({
    weather: state.weather.weather,
});

const mapDispatchToProps = dispatch => ({
    getWeather: () => dispatch(getWeather())
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherInfo);;
