import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from '../constants';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        margin: '2%',
    },
    topDiv: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
    },
    titleDiv: {
        margin: 'auto',
        width: '50%',
        [theme.breakpoints.down('xs')]: {
            width: '90%',
        },
        textAlign: 'center',
    },
    dateDiv: {
        marginLeft: '50%',
    },
    pictureDiv: {
        height: 'auto', // fits the media source
        padding: '2%',
    },
    media: {
        margin: 'auto',
        boxShadow: '0 6px 20px rgba(242, 243, 235, 0.904)',
        filter: 'drop-shadow(0 6px 20px rgba(217, 228, 247, 0.017))',
        borderRadius: '10px',
        overflow: 'hidden',
        maxWidth: '100%',
    },
    explanation: {
        textAlign: 'left',
        width: '70%',
        [theme.breakpoints.down('xs')]: {
            width: '90%',
        },
        margin: '3% auto 8%',
        padding: '3%',
        lineHeight: '1.8',
        boxShadow: '0 6px 20px rgba(242, 243, 235, 0.904)',
        filter: 'drop-shadow(0 6px 20px rgba(217, 228, 247, 0.017))',
        borderRadius: '10px',
        overflow: 'hidden',
        backgroundColor: 'rgb(245, 231, 188)',
    },

}));

function NasaInfo() {
    const [nasaData, setNasaData] = useState({});
    const [date, setDate] = useState('')
    let picture;
    const classes = useStyles();

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}&date=${date}`)
      .then(res => (
        setNasaData(res.data),
        setDate(res.data.date)
      ))
      .catch(err => {
        console.log(err)
      })
  }, [date])
    

    if (nasaData.media_type === 'video') {
        picture =
            <iframe src={nasaData.url}
            frameborder='0'
            title='NASA video of the day'
            allowfullscreen= 'true'
            className={classes.media}
            height= '300px'
            width='550px'
            />
    } else {
        picture = 
            <img 
                src={nasaData.url} 
                alt={nasaData.title} 
                className={classes.media}
                width='550px'
                />
    }

    return (
        <div className={classes.root}>
                <div className={classes.dateDiv}>
                    <p>{nasaData.date}</p>
                </div>
           <div className={classes.topDiv}>
                <div className={classes.titleDiv}>
                    <h2>{nasaData.title}</h2>
                </div>
                <div className={classes.pictureDiv}>{picture}</div>
           </div>
        

            <Paper className={classes.explanation}>
                <p>{nasaData.explanation}</p>
                <div style={{ textAlign: 'right'}}><small>Copyright {nasaData.copyright}</small></div>
            </Paper>
        </div>
    )

}

export default NasaInfo
