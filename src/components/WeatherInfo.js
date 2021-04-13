import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import ReactPaginate from 'react-paginate';
import { getWeather, toggleTempScale } from '../redux/actions/index';
import Loading from './Loading';
import { kelvinToCelsius, kelvinToFahrenheit } from './helpers';
// materialui stuff
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
function WeatherInfo({weather, getWeather, tempScale, toggleTempScale, loading}){
  const classes = useStyles;

  const [offset, setOffset] = useState(0);
  const [perPage] = useState(3);
  const [pageCount, setPageCount] = useState(0)

  useEffect(() => {
      getWeather();
      setPageCount(Math.ceil(weather.length / perPage))
  }, [getWeather]);

  const onToggleTempScale = () => {
    toggleTempScale();
  };
  const temperature = (temp) => {
    return tempScale === 'celsius' ? kelvinToCelsius(temp) : kelvinToFahrenheit(temp);
  };

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1)
  };
  const slice = weather.slice(offset, offset + perPage);
  if(!loading){
  return(
    <>
      <div className={classes.heroContent}>
          <Container className={classes.cardGrid} maxWidth="md">
          <div className="align-center">
        <label className="switch">
          <input
            onChange={onToggleTempScale}
            // checked={props.degreeFormat}
            type="checkbox"
          ></input>
          <span className="slider round align-center">
            <div
              style={{
                display: "flex",
                gap: "20px",
                color: "black",
                zIndex: 2,
                position: "relative",
                fontSize: "12px",
              }}
            >
              <span>C</span>
              <span>F</span>
            </div>
          </span>
        </label>
      </div>
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}/>
    
              <Grid container spacing={4}>
                  {slice.map((card) => (
                      <Grid item key={card} xs={12} sm={6} md={4}>
                          <Card className={classes.card} key={card.dt}>
                              <CardContent className={classes.cardContent}>
                                  <Typography gutterBottom variant="h5" component="h2">
                                      Temp: <br/>{temperature(card.main.temp)}
                                  </Typography>
                                  <Typography>
                                      Date: <br/>{card.dt_txt}
                                  </Typography>
                                  <Typography>
                                    <p>
                                      Feels like: {temperature(card.main.feels_like)} | {card.weather[0].description} |
                                      Humidity: {card.main.humidity}%
                                    </p>
                                  </Typography>
                              </CardContent>
                          </Card>
                      </Grid>
                  ))}
              </Grid>
          </Container>
      </div> 
    </>    
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
    loading: state.weather.isLoading,
    tempScale: state.tempScale
});

const mapDispatchToProps = dispatch => ({
    getWeather: () => dispatch(getWeather()),
    toggleTempScale: () => dispatch(toggleTempScale())
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherInfo);;
