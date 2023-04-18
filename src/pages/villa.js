import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroImage from '../../static/case_page_imgs/alex_page.jpeg';

import { commonStyles } from '../commonStyles';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const articles = [
  {
    title: 'Gallows humor? Accused cop killers say some email between police bosses raises red flags',
    link: 'https://www.wbez.org/stories/accused-cpd-cop-killers-email-exchange-raises-red-flag/b5204e0c-e862-48f7-a5c5-208e5ca05ab9'
  },
  {
    title: 'Defense allowed to review investigative file after allegations police did not disclose evidence in slaying of off-duty cop',
    link: 'https://www.chicagotribune.com/news/criminal-justice/ct-police-murder-investigation-hearing-alexander-villa-20220503-tuuubbhnqje7dotseeszhyuxay-story.html'
  },
  {
    title: '11 years after Chicago Police Officer Clifton Lewis murder, 3 men charged could soon walk free',
    link: 'https://abc7chicago.com/officer-clifton-lewis-chicago-police-killed-cpd/12629111/'
  },
  {
    title: 'More than a decade ago, CPD vowed to catch a cop’s killers. Now those cases, plagued by accusations of misconduct, are falling apart',
    link: 'https://www.chicagotribune.com/news/criminal-justice/ct-clifton-lewis-killing-case-problems-20230219-ajwetp45hnb6taabg2usznju5u-story.html'
  },
  {
    title: '11 years after off-duty Chicago cop’s murder, the case against his alleged killers has frayed',
    link: 'https://chicago.suntimes.com/crime/2022/10/3/23386011/clifton-lewis-murder-cpd-cop-killer-officer-tyrone-clay-edgardo-colon-alexander-villa'
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

const Villa = () => {
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

          <Typography variant='h4'>Alexander Villa</Typography>
        </div>
        <div className={classes.border}></div>



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

export default Villa;
