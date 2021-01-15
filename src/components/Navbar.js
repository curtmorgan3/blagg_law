import React from 'react';
import { makeStyles } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from 'gatsby';
import { Typography, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#3E485A',
    minHeight: '115px',
    padding: '0 5%',
    margin: '0 4.55%',
  },
  title: {
    width: '30%',
    display: 'flex',
    alignItems: 'center',

    '& a': {
      textDecoration: 'none'
    },

    '& h4': {
      fontFamily: 'optima, sans-serif',
      color: '#ffffff',
      fontWeight: 'bold',
    }

  },
  links: {
    width: '60%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',

    '& a': {
      fontFamily: 'optima, sans-serif',
      color: '#ffffff',
      fontWeight: 'bold',
      textDecoration: 'none',
      fontSize: '1.2rem'
    }

  },
  mobileNav: {
    backgroundColor: '#3E485A',
    height: '8vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '0 2%',

    '& p': {
      fontFamily: 'optima, sans-serif',
      color: '#ffffff',
    }
  }, 

  mobileLinks: {
    width: '100%',
    height: '30vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '5% 0',
    backgroundColor: '#3E485A',

    '& a': {
      fontFamily: 'optima, sans-serif',
      color: '#ffffff',
      fontWeight: 'bold',
      textDecoration: 'none',
      fontSize: '1.2rem'
    }
  }
}

const Navbar = () => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const isSmallDevice = useMediaQuery('@media only screen and (min-device-width: 250px) and (max-device-width: 812px)');

  const [isOpen, toggleDrawer] = React.useState(false);

  return (

    !isSmallDevice 
    
      ? 
        <div className={classes.navbar}>
          <div className={classes.title}>
            <Link to='/'><Typography variant='h4'>LAW OFFICE OF JENNIER BLAGG</Typography></Link>
          </div>
          <div className={classes.links}>
            <Link to='/about'>ABOUT</Link>
            <Link to='/cases'>CASES</Link>
            <Link to='/services'>SERVICES</Link>
            <Link to='/contact'>CONTACT</Link>
          </div>
        </div>

      : 
        <div className={classes.mobileNav}>
          <Typography variant='body1'>LAW OFFICE OF JENNIER BLAGG</Typography>
          <MenuIcon style={{color: '#ffffff'}} onClick={() => toggleDrawer(true)} />
          <Drawer anchor='top' open={isOpen} onClose={() => toggleDrawer(false)}>
          <CloseIcon onClick={() => toggleDrawer(false)} style={{backgroundColor: '#3E485A', color: '#ffffff', width: '100%'}} />
            <div className={classes.mobileLinks}>
              <Link to='/'>HOME</Link>
              <Link to='/about'>ABOUT</Link>
              <Link to='/cases'>CASES</Link>
              <Link to='/services'>SERVICES</Link>
              <Link to='/contact'>CONTACT</Link>
            </div>
          </Drawer>
        </div>
  )
}

export default Navbar;