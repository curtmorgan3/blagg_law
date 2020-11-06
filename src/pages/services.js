import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { commonStyles } from '../commonStyles';

import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const services = [
  'Felony & Misdemeanor Trials',
  'Criminal Appeals',
  'Supervisory Orders',
  '2-1401 Petitions',
  'Post-Conviction Petitions',
  'DUI Defense',
  'Statutory Summary Suspension',
  'Revoked & Suspended License',
  'Expunge & Seal Your Record',
  'Clemency Petitions',
  'Section 1983 Civil Litigation',
]

const Services = () => {
  const styles = {
    ...commonStyles,
    list: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '5%',

      '& h6': {
        marginBottom: '2%',
        fontWeight: 'bold',
        textAlign: 'center'
      }
    }
  }

  const useStyles = makeStyles(styles);
  const classes = useStyles();
  
  return (
    <div>
      <Navbar />
      
      <div className={classes.page}>
        <div className={classes.border}></div>

        <div className={classes.header}>
          <Typography variant='h5'>PRACTICE</Typography>
        </div>

        <div className={classes.list}>
          {services.map(service => (
            <Typography variant='h6'>{service}</Typography>
          ))}
        </div>
        <div className={classes.border} style={{marginTop: '2%'}}></div>
      </div>

      <Footer />
    </div>
  )
}

export default Services;