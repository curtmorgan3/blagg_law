import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { keywords, description } from '../seo.js'; 

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Services from '../components/Services';
import heroImage from '../../static/blagg1.jpg';

import { commonStyles } from '../commonStyles';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

import CaseCard from '../components/CaseCard';

import { cases } from '../cases';

const styles = {
  ...commonStyles, 
  hero: {
    width: '90.9vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#3e485a',

    '& img': {
      width: '90.9vw',
    },

    '& h4': {
      fontWeight: 'bold',
      margin: '2% 0',
      textAlign: 'center'
    }
  },
  exonerations: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '90.9vw',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '5%'
  },
  link: {
    padding: '2%',
    borderRadius: '5px',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: '#CD4C4C'
    }
  }
}

const Home = () => {
  const isSmallDevice = useMediaQuery('@media only screen and (min-device-width: 250px) and (max-device-width: 812px)');
  if (isSmallDevice) {
    styles.hero['& h4'].fontSize = '1.2rem';
    styles.exonerations.justifyContent = 'center';
  }

  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const featuredCases = cases.filter(entry => entry.featured);

  return (
    <div>
      <Helmet>
        <title>Blagg Law ~ Chicago</title>
        <link rel="canonical" href="https://www.blagglaw.net" />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Helmet>
      <Navbar />
      
      
      
      <div className={classes.page}>

        <div className={classes.hero}>
          <img src={heroImage} />

          <Typography variant='h4'>Zealous Criminal Defense</Typography>
        </div>

        <Services />

        <div className={classes.exonerations}>
          {featuredCases.map(entry => (
            <CaseCard key={entry.name} case={entry} />
          ))}
        </div>

        <Link to='/cases' className={classes.link}>
          <Typography style={{ fontWeight: 'bold', textAlign: 'center'}} variant='h5'>Learn More About Our Cases</Typography>
        </Link>

        <div className={classes.border} style={{marginTop: '2%'}}></div>

      </div>

      <Footer />
    </div>
  )
}

export default Home;
