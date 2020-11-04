import React from 'react';

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


      </div>

      <Footer />
    </div>
  )
}

export default Cases;