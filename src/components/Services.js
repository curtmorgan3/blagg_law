import React from 'react';

import { Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/styles';

const styles = {
  services: {
    display: 'flex',
    width: '90vw',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  service: {
    width: '30%',
    padding: '0 5%',
    marginBottom: '2%',
    marginTop: '2%',
  },
  border: {
    width: '90vw',
    height: '5px',
    backgroundColor: '#ffffff'
  }
}

const Services = () => {
  const isSmallDevice = useMediaQuery('@media only screen and (min-device-width: 250px) and (max-device-width: 812px)');

  if (isSmallDevice) {
    styles.service.width = '80%'
  }

  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (

    <div className={classes.services}>

      <div className={classes.border}></div>

      <div className={classes.service}>
        <Typography variant='h6' style={{ fontWeight: 'bold' }}>TRIALS</Typography>

        <Typography variant='body1'>
          Even misdemeanor charges can lead to incarceration and the loss of civil rights. 
          At the Law Office of Jennifer Blagg, we will fight to ensure that your rights are protected. 
          Jennifer Blagg will bring personal attention, dedication, and compassion to your case. 
          The Law Office of Jennifer Blagg offers individualized representation and years of experience to ensure
          your rights are protected.
        </Typography>
      </div>

      <div className={classes.service}>
        <Typography variant='h6' style={{ fontWeight: 'bold' }}>APPEALS</Typography>

        <Typography variant='body1'>
          Once you have been convicted, it becomes much harder to win your freedom on appeal. 
          As a former Appellate Defender and judical clerk, Jennifer Blagg has extensive experience writting 
          and arguing criminal appeals. The Law Offices of Jennifer Blagg brings years of practice and experience 
          to your case to increase your chances of obtaining a favorable result on appeal.
        </Typography>
      </div>

      <div className={classes.service}>
        <Typography variant='h6' style={{ fontWeight: 'bold' }}>POST CONVICTION PETITIONS</Typography>

        <Typography variant='body1'>
          Chicago was dubbed the false conviction capital of the United States in a segment on 60 Minutes profiling 
          Jennifer’s Dixmoor Five case. Each year, wrongfully convicted inmates struggle to prove their innocence. 
          Jennifer Blagg will properly frame your arguments and vigorously litigate your claims.  She has a proven track 
          record of success. 
        </Typography>
      </div>

      <div className={classes.service}>
        <Typography variant='h6' style={{ fontWeight: 'bold' }}>DUI & Traffic</Typography>

        <Typography variant='body1'>
          Charges for driving under the infulence can be very scary. Each year, many DUI defendants face lossing their licenses, 
          extensive fines, and even jail time. The Office of Jennifer Blagg will fight vigorously to protect your license and 
          your liberty. Contact the Law Office of Jennifer Blagg for a free consolation and find out how we can help you.   
        </Typography>
      </div>

      <div className={classes.border}></div>

    </div>
  )
}

export default Services;