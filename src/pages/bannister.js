import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { commonStyles } from '../commonStyles';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const articles = [
  {
    title: "Read about Lee's case, and how his friend, Robert Chattler's, kept a promise to help Lee prove his innocence in The Marshall Project's original series Cellmates",
    link: 'https://www.themarshallproject.org/2018/11/02/cellmates'
  },
  {
    title: 'The Guardian reviews Zuley cases',
    link: 'https://www.theguardian.com/us-news/2015/feb/19/evidence-chicago-detective-richard-zuley'
  },
  {
    title: `The Guardian: "Bad lieutenant: American police brutality, exported from Chicago to Guantánamo`,
    link: 'https://www.theguardian.com/us-news/2015/feb/18/american-police-brutality-chicago-guantanamo'
  },
  {
    title: 'WGN Investigates! Mark Suppelsa investigates to determine if Lee Harris was framed',
    link: 'https://wgntv.com/news/man-convicted-of-gold-coast-atm-murder-says-he-was-framed/'
  },
]

const styles = {
  ...commonStyles, 
  hero: {
    width: '90.9vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '& img': {
      width: '90.9vw',
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

const Harris = () => {
  const isSmallDevice = useMediaQuery('@media only screen and (min-device-width: 250px) and (max-device-width: 812px)');
  if (isSmallDevice) {
    styles.hero['& h4'].fontSize = '1.2rem';
    styles.articles.width = '80%';
    styles.hero.height = '50vh';
  }

  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      
      <div className={classes.page}>

        <div className={classes.hero}>
          <iframe src='https://www.youtube.com/embed/OCmCPZr-in4'
            frameborder='0'
            title='video'
            height={isSmallDevice ? '100%' : '500px'}
            width={isSmallDevice ? '100%' : '800px'}
          />

        <Typography variant='h4'>James Bannister</Typography>
        </div>
        <div className={classes.border}></div>

        

       
      </div>

      
    </div>
  )
}

export default Harris;
