import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Carousel from 'nuka-carousel';
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
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
  carousel: {
    marginTop: theme.spacing(4)
  }
}));

export default function WeatherInfo(){
  
  const weather = useSelector(state => state.weather.weather);
  const loading = useSelector(state => state.weather.isLoading);
  const tempScale = useSelector(state => state.tempScale);
  
  const dispatch = useDispatch();
  const classes = useStyles;

  useEffect(() => {
    dispatch(getWeather());
  }, [dispatch]);

  const onToggleTempScale = () => {
    dispatch(toggleTempScale());
  };
  const temperature = (temp) => {
    return tempScale === 'fahrenheit' ? kelvinToFahrenheit(temp) : kelvinToCelsius(temp);
  };
  if(loading){
    
  }
  return(
    loading ? <Loading /> : (
      <>
        <div className={classes.heroContent}>
          <Container className={classes.cardGrid} maxWidth="md">
            <div className="align-center">
              <label className="switch">
                <input
                  onChange={onToggleTempScale}
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
                    <span>F</span>
                    <span>C</span>
                  </div>
                </span>
              </label>
            </div>
            <Carousel slidesToShow={3} cellSpacing={20} slidesToScroll={2} className={classes.carousel}>
              {Object.values(weather).map((card) => (
                <Grid item key={card}>
                  <Card className={classes.card} key={card.date}>
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Temp: <br/>{temperature(card.temp)}
                        </Typography>
                        <Typography>
                            Date: <br/>{card.date}
                        </Typography>
                        <Typography>
                          <span>
                            Humidity: {card.humidity}% | Feels Like: {temperature(card.feels_like)} | Pressure: {card.pressure} 
                          </span>
                        </Typography>
                    </CardContent>
                  </Card>      
                </Grid>             
              ))}
            </Carousel>
          </Container>
        </div> 
      </>    
    )
  )
}
