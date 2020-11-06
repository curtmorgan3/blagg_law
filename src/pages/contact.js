import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { commonStyles } from '../commonStyles';

import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const Contact = () => {
  const styles = {
    ...commonStyles,
    contact: {
      marginBottom: '5%',

      '& p': {
        textAlign: 'center',
        fontSize: '1.2rem'
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
          <Typography variant='h5'>CONTACT US</Typography>
        </div>


        <div style={{marginBottom: '5%'}}>
          <Typography variant='h5' style={{marginBottom: '5%', fontWeight: 'bold', textAlign: 'center'}}>JENNIFER BLAGG</Typography>

          <div className={classes.contact}>
            <Typography variant='body1'>Law Office of Jennifer Blagg</Typography>
            <Typography variant='body1'>1333 W. Devon Ave. Suite 267</Typography>
            <Typography variant='body1' style={{marginBottom: '5%'}}>Chicago, IL 60660</Typography>
            <Typography variant='body1'>Phone: 773 859-0081</Typography>
            <Typography variant='body1' style={{marginBottom: '5%'}}>Fax: 773 439-2863</Typography>
            <Typography variant='body1'>jennifer@blagglaw.net</Typography>
          </div>
        </div>

        <div style={{marginBottom: '5%'}}>
          <Typography variant='h5' style={{marginBottom: '5%', fontWeight: 'bold', textAlign: 'center'}}>ERIC BISBY - ASSOSCIATE</Typography>

          <div className={classes.contact}>
            <Typography variant='body1'>Law Office of Jennifer Blagg</Typography>
            <Typography variant='body1'>1333 W. Devon Ave. Suite 267</Typography>
            <Typography variant='body1' style={{marginBottom: '5%'}}>Chicago, IL 60660</Typography>
            <Typography variant='body1'>Phone: (312) 218-6015</Typography>
            <Typography variant='body1' style={{marginBottom: '5%'}}>Fax: 773 439-2863</Typography>
            <Typography variant='body1'>eric@blagglaw.net</Typography>
          </div>
        </div>
        <div className={classes.border} style={{marginTop: '2%'}}></div>

      </div>

      <Footer />
    </div>
  )
}

export default Contact;