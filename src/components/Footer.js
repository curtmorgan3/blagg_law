import React from 'react';
import { makeStyles } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Typography } from '@material-ui/core';
import { commonStyles } from '../commonStyles';

const styles = {
  ...commonStyles,
  footer: {
    width: '90%',
    minHeight: '10vh',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#3E485A',
    padding: '2% 0',
    margin: '0 4.5%'
  },
  info: {
    display: 'flex',
    width: '50%',
    justifyContent: 'space-around',

    '& p': {
      textAlign: 'center',
      color: '#ffffff',
      fontSize: '0.8 rem'
    }
  }
}


const Footer = () => {
  const useStyles = makeStyles(styles);
  const isSmallDevice = useMediaQuery('@media only screen and (min-device-width: 250px) and (max-device-width: 812px)');

  if (isSmallDevice) {
    styles.info.flexDirection = 'column';
    styles.info.width = '75%';
  }
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.info}>
        <div style={{marginBottom: '10%'}}>
          <Typography>JENNIFER BLAGG</Typography>

          <div>
            <Typography variant='body1'>Law Office of Jennifer Blagg</Typography>
            <Typography variant='body1'>1333 W. Devon Ave. Suite 267</Typography>
            <Typography variant='body1'>Chicago, IL 60660</Typography>
            <Typography variant='body1'>Phone: 773 859-0081</Typography>
            <Typography variant='body1'>Fax: 773 439-2863</Typography>
            <Typography variant='body1'>jennifer@blagglaw.net</Typography>
          </div>
        </div>

        <div>
          <Typography>ERIC BISBY</Typography>

          <div>
            <Typography variant='body1'>Law Office of Jennifer Blagg</Typography>
            <Typography variant='body1'>1333 W. Devon Ave. Suite 267</Typography>
            <Typography variant='body1'>Chicago, IL 60660</Typography>
            <Typography variant='body1'>Phone: (312) 218-6015</Typography>
            <Typography variant='body1'>Fax: 773 439-2863</Typography>
            <Typography variant='body1'>eric@blagglaw.net</Typography>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer;