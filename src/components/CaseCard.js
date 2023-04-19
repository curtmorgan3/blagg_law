import React from 'react';
import { Link } from 'gatsby';
import { commonStyles } from '../commonStyles';
import { Paper, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';

const styles = {
  ...commonStyles,
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '280px',
    height: '490px',
    marginBottom: '5%',
    boxShadow: '0.2vw 0.3vw 0.5vw 0.4vw rgba(0, 0, 0, 0.3)',

  },
  name: {
    color: '#000000 !important',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: '5%'
  },
  bio: {
    color: '#000000 !important',
    padding: '10% 10% 2% 10%',
    lineHeight: '1.2'
  },
  link: {
    height: '35px',
    width: '112px',
    backgroundColor: '#3E485A',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    borderRadius: '10px',

    '& a': {
      textDecoration: 'none',
      color: '#ffffff',
      fontFamily: 'optima, sans-serif',
    }
  }
}

const CaseCard = (props) => {
  // Styles
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  ////////

  const { name, bio, img, link } = props.case;

  console.log(props.showLink);

  return (
    <Paper className={classes.card} elevation={3}>
      <img style={{height: '222px'}} src={img} alt={name} />

      <Typography variant='h6' className={classes.name}>{name}</Typography>
      <Typography variant='body1' className={classes.bio}>{bio}</Typography>

      {props.showLink && link 
        ? 
          <div className={classes.link}>
            <Link to={link}>Learn More</Link>
          </div>
        : null
      }
    </Paper>
  )
}

export default CaseCard;