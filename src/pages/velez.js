import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroImage from '../../static/case_page_imgs/velez_page.jpg';

import { commonStyles } from '../commonStyles';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const articles = [
  {
    title: 'Charges Dismissed in 2001 Chicago Murder after Prosecutors Admit Error at Trial',
    link: 'http://www.chicagotribune.com/news/local/breaking/ct-met-murder-charges-dismissed-20171211-story.html'
  },
  {
    title: 'The National Registry of Exonerations',
    link: 'https://www.law.umich.edu/special/exoneration/Pages/casedetail.aspx?caseid=5250'
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
      maxHeight: '500px'
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

const Velez = () => {
  const isSmallDevice = useMediaQuery('@media only screen and (min-device-width: 250px) and (max-device-width: 812px)');
  if (isSmallDevice) {
    styles.hero['& h4'].fontSize = '1.2rem';
    styles.articles.width = '80%';
    styles.hero['& img'].width = '90vw';
  }

  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      
      <div className={classes.page}>

        <div className={classes.hero}>
          <img src={heroImage} />

          <Typography variant='h4'>John Velez</Typography>
        </div>
        <div className={classes.border}></div>

        <div className={classes.bio}>

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

export default Velez;
