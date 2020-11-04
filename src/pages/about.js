import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { commonStyles } from '../commonStyles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

import jennifer from '../../static/jennifer.jpg';
import eric from '../../static/eric.jpg';

const About = () => {
  const styles = {
    ...commonStyles,
    about: {
      display: 'flex',
      width: '70%',
      marginBottom: '5%'
    },
    avatar: {
      height: '220px',
      width: '220px',
      borderRadius: '50%',
      marginBottom: '2%',
      boxShadow: '0.2vw 0.3vw 0.5vw 0.4vw rgba(0, 0, 0, 0.3)'
    },
    bio: {
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: '5%'
    }
  }

  const isSmallDevice = useMediaQuery('@media only screen and (min-device-width: 250px) and (max-device-width: 812px)');

  if (isSmallDevice) {
    styles.about.flexDirection = 'column';
  }

  const useStyles = makeStyles(styles);
  const classes = useStyles();
  
  return (
    <div>
      <Navbar />
      
      <div className={classes.page}>
        <div className={classes.border}></div>

        <div className={classes.header}>
          <Typography variant='h5'>ABOUT US</Typography>
        </div>

        <div className={classes.about}>
          <img src={jennifer} alt='Jennifer Blagg' className={classes.avatar} />

          <div className={classes.bio}>
            <Typography variant='h6' style={{fontWeight: 'bold'}}>JENNIFER BLAGG</Typography>

            <Typography variant='body1' style={{marginBottom: '2%'}}>
              Jennifer Blagg brings extensive experience to your case. She has worked both behind the scenes, as a clerk for the Honorable Andree Layton Roaf, 
              and as a zealous advocate for her clients in both the appellate and circuit courts. Prior to beginning her law practice, Jennifer worked for many years in corporate America. 
              She went to law school at night while working full time. She graduated in the top ten percent of her law school class at the William H. Bowen School of Law. 
              While in law school, she was a member of the Law Journal and served as Associate Editor of Surveys.
            </Typography>

            <Typography variant='body1'>
              Ms. Blagg has extensive experience writing and researching criminal cases, as she worked for seven years at the Office of the State Appellate Defender in the First District. 
              Since 2008, Ms. Blagg has been in a successful private practice focusing on criminal defense at every level - trial, appellate, and post conviction petitions. 
              Her cases have nationally recognized and profiled on 60 Minutes, Investigation Discovery, and Crime Watch Daily.  
              Her cases were chronicled in the podcast Reply All and the short story Cellmates.
            </Typography>

          </div>
        </div>

        <div className={classes.about}>
          <img src={eric} alt='Jennifer Blagg' className={classes.avatar} />

          <div className={classes.bio}>
            <Typography variant='h6' style={{fontWeight: 'bold'}}>ERIC BISBY - ASSOCIATE</Typography>

            <Typography variant='body1' style={{marginBottom: '2%'}}>
              Eric Bisby has worked at the Law Office of Jennifer Blagg since his second semester in law school. 
              Eric attended undergraduate school at Middle Tennessee State University where he graduated cum laude obtaining his bachelors degree in 
              political science. While at MTSU, Eric served as a research assistant for Dr. Amanda O’Brien and briefed cases on warrantless wire-taps, 
              the FISA courts, and Separation of Powers. After leaving Tennessee, Eric attended the John Marshall Law School where he graduated cum laude and in the top 10% of his class.
            </Typography>

            <Typography variant='body1'>
              As an attorney at the Law Office of Jennifer Blagg, Eric has a keen interest in scientific evidence, specifically DNA and forensic pathology. 
              Eric has been selected twice to attend the National Forensic College. Eric has developed a working knowledge of forensic science in order to understand the complex scientific 
              issues that are increasingly prevalent in criminal litigation.
            </Typography>

          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default About;