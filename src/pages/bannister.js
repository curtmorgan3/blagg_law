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
          <iframe src='https://w3.cdn.anvato.net/player/prod/v3/anvload.html?key=eyJtIjoiY2JzIiwidiI6IjU1OTM4MDAiLCJhbnZhY2siOiI1VkQ2RXlkNmRqZXdiQ21Od0JGbnNKajE3WUF2R1J3bCIsInNoYXJlTGluayI6Imh0dHBzOi8vY2JzbG9jLmFsLzN5akYzOHoiLCJwbHVnaW5zIjp7ImNvbXNjb3JlIjp7ImNsaWVudElkIjoiMzAwMDAyMyIsImMzIjoiQ2hpY2Fnby5jYnNsb2NhbC5jb20ifSwiZGZwIjp7ImNsaWVudFNpZGUiOnsiYWRUYWdVcmwiOiJodHRwOi8vcHViYWRzLmcuZG91YmxlY2xpY2submV0L2dhbXBhZC9hZHM%2Fc3o9MngyJml1PS80MTI4L2Nicy5jaGkmY2l1X3N6cyZpbXBsPXMmZ2RmcF9yZXE9MSZlbnY9dnAmb3V0cHV0PXhtbF92YXN0MiZ1bnZpZXdlZF9wb3NpdGlvbl9zdGFydD0xJnVybD1bcmVmZXJyZXJfdXJsXSZkZXNjcmlwdGlvbl91cmw9W2Rlc2NyaXB0aW9uX3VybF0mY29ycmVsYXRvcj1bdGltZXN0YW1wXSIsImtleVZhbHVlcyI6eyJjYXRlZ29yaWVzIjoiW1tDQVRFR09SSUVTXV0iLCJwcm9ncmFtIjoiW1tQUk9HUkFNX05BTUVdXSIsInNpdGVTZWN0aW9uIjoidmlkZW8tZXhwZXJpZW5jZSJ9fX0sIm1vYXQiOnsiY2xpZW50U2lkZSI6eyJwYXJ0bmVyQ29kZSI6ImNic2xvY2FsYW52YXRvdmlkZW8xODE3MzI2MDk0MzEifX0sImhlYXJ0YmVhdEJldGEiOnsiYWNjb3VudCI6ImNic2xvY2FsLWdsb2JhbC11bmlmaWVkIiwicHVibGlzaGVySWQiOiJjYnNsb2NhbCIsImpvYklkIjoic2NfdmEiLCJtYXJrZXRpbmdDbG91ZElkIjoiODIzQkEwMzM1NTY3NDk3RjdGMDAwMTAxQEFkb2JlT3JnIiwidHJhY2tpbmdTZXJ2ZXIiOiJjYnNkaWdpdGFsbWVkaWEuaGIub210cmRjLm5ldCIsImN1c3RvbVRyYWNraW5nU2VydmVyIjoiY2JzZGlnaXRhbG1lZGlhLmQxLnNjLm9tdHJkYy5uZXQiLCJjaGFwdGVyVHJhY2tpbmciOmZhbHNlLCJ2ZXJzaW9uIjoiMS41IiwicGFyZW50UGFnZVVSTCI6Imh0dHBzOi8vY2hpY2Fnby5jYnNsb2NhbC5jb20vdmlkZW8vNTU5MzgwMC1jb252aWN0ZWQtbWFuLWZpZ2h0aW5nLXRvLWhhdmUtY2FzZS1yZWhlYXJkLWFmdGVyLWphaWxob3VzZS1jb25mZXNzaW9uLXJlbW92ZXMtZXZpZGVuY2UtaW4tYS1tdXJkZXItaGUtc2F5cy1oZS1kaWQtbm90LWNvbW1pdC8iLCJwYXJlbnRUaXRsZSI6IkNvbnZpY3RlZCBNYW4gRmlnaHRpbmcgVG8gSGF2ZSBDYXNlIFJlaGVhcmQgQWZ0ZXIgSmFpbGhvdXNlIENvbmZlc3Npb24gUmVtb3ZlcyBFdmlkZW5jZSBJbiBBIE11cmRlciBIZSBTYXlzIEhlIERpZCBOb3QgQ29tbWl0IOKAkyBDQlMgMjogTmV3cywgV2VhdGhlciwgU3BvcnRzIE9uIEFsbCBQbGF0Zm9ybXMiLCJwSW5zdGFuY2UiOiJwMCIsInByb2ZpbGUiOiJjYnMiLCJjdXN0b21UcmFja2luZ1NlcnZlclNlY3VyZSI6ImNic2RpZ2l0YWxtZWRpYS5kMS5zYy5vbXRyZGMubmV0In0sImhlYWx0aEFuYWx5dGljcyI6e319LCJodG1sNSI6dHJ1ZSwidG9rZW4iOiJkZWZhdWx0In0%3D'
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
