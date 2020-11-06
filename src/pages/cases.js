import React from 'react';
import { Helmet } from 'react-helmet';
import { keywords, description } from 'react-helmet';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { commonStyles } from '../commonStyles';

import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import CaseCard from '../components/CaseCard';
import { cases } from '../cases';

const Cases = () => {
  const styles = {
    ...commonStyles,
    cases: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '90%',
      justifyContent: 'space-around'
    },
  }

  const useStyles = makeStyles(styles);
  const classes = useStyles();
  
  return (
    <div>
      <Helmet>
        <title>Blagg Law ~ Chicago | Cases</title>
        <link rel="canonical" href="https://www.blagglaw.net/cases" />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Helmet>
      <Navbar />
      
      <div className={classes.page}>
      <div className={classes.border}></div>

      <div className={classes.header}>
        <Typography variant='h5'>NOTABLE CASES</Typography>
      </div>

      <div className={classes.cases}>
        {cases.map(entry => (
          <CaseCard key={entry.name} case={entry} showLink />
        ))}
      </div>


      <div className={classes.border} style={{marginTop: '2%'}}></div>
      </div>
      <Footer />
    </div>
  )
}

export default Cases;