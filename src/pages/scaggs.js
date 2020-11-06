import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroImage from '../../static/case_page_imgs/scaggs_page.jpg';

import { commonStyles } from '../commonStyles';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const articles = [
  {
    title: 'Charged with Murder, but They Didn’t Kill Anyone—Police Did',
    link: 'https://www.chicagoreader.com/chicago/felony-murder-police-shooting-investigation/Content?oid=23200575'
  },
]

const styles = {
  ...commonStyles, 
  hero: {
    width: '90vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '& img': {
      width: '90vw',
    },

    '& h4': {
      fontWeight: 'bold',
      padding: '2% 0',
      textAlign: 'center',
      width: '100%',
      backgroundColor: '#3e485a'
    }
  },
  bio: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column'
  },
  articles: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',

    '& h6': {
      marginBottom: '5%',
      width: '100%',
      '& a': {
        color: '#ffffff',
        textDecoration: 'none',
      }
    }
  }
}

const Scaggs = () => {
  const isSmallDevice = useMediaQuery('@media only screen and (min-device-width: 250px) and (max-device-width: 812px)');
  if (isSmallDevice) {
    styles.hero['& h4'].fontSize = '1.2rem';
    styles.articles.width = '80%';
  }

  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      
      <div className={classes.page}>

        <div className={classes.hero}>
          <img src={heroImage} />

          <Typography variant='h4'>Tristan Scaggs</Typography>
        </div>
        <div className={classes.border}></div>

        <div className={classes.bio}>
          <Typography variant='body1' style={{margin: '2% 0'}}>
            Tristan Scaggs, narrowly escaped death when police officers surrounded the car in which he was a passenger and fired 
            at the vehicles’ occupants when one officer yelled, “He has a gun.” Both the driver of the car and rear passenger died 
            from multiple bullet wounds. Scaggs was shot in the back and suffers from permanent kidney damages. 
            Ballistics evidence later established that the police fired a minimum of 69 times at the car and boys from at least 10 
            different guns.
          </Typography>

          <Typography variant='body1' style={{margin: '2% 0'}}>
            Police purported to stop and surround the vehicle to stop the men from carrying out an alleged conspiracy to commit murder. 
            However, the vehicle was stopped after it turned and traveled in the opposite direction of the location where the murder was supposed to occur. 
            The police stopped the car and fired gunshots at it in a busy residential intersection while numerous cars and a school bus was present.
          </Typography>

          <Typography variant='body1' style={{margin: '2% 0'}}>
            Police attempted to justify the shooting by initially claiming that the men fired at them before they responded with fire. 
            However, once it was established that there was no evidence to support the police’s assertion that any of the three men fired shots at them, 
            police justified that shooting by stating that one of the men pointed a gun at the police.
          </Typography>

          <Typography variant='body1' style={{margin: '2% 0'}}>
            Through Jennifer Blaggs representation of Scaggs, she has presented evidence that Scaggs complied with officers’ orders and immediately got out of the car 
            with his hands raised and laid on the ground. At trial, the officer that shot Scaggs said Scaggs exited the vehicle with a gun and pointed it at him. 
            However, three other officers saw Scaggs exit the car and comply with officers’ orders; those officers were not called to testify at trial. 
            Blagg presented the court with evidence that Scaggs never had a gun, and police manufactured evidence that he possessed one in order to justify shooting him in his back. 
            She also presented the judge with evidence showing that the officer that shot Scaggs has a history of unjustified shootings.
          </Typography>

          <Typography variant='body1' style={{margin: '2% 0'}}>
            The judge that originally heard Scaggs’ case dismissed his petition without ordering a hearing. 
            In dismissing the petition, the judge did not address the fact that three officers exonerated Scaggs of any wrongdoing.
          </Typography>
        </div>

        <div className={classes.header}>
          <Typography variant='h5'>NEWS COVERAGE</Typography>
        </div>

        <div className={classes.articles}>
          {articles.map(article => (
            <Typography variant='h6' style={{fontWeight: 'bold'}}>
              <a target='_blank' rel='noopener noreferrer' href={article.link}>
                {article.title}
              </a>
            </Typography>
          ))}
        </div>

        <div className={classes.border} style={{marginTop: '2%'}}></div>

      </div>

      <Footer />
    </div>
  )
}

export default Scaggs;
