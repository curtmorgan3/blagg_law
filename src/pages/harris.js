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
          <iframe src='https://w3.mp.lura.live/player/prod/v3/anvload.html?key=eyJtIjoiTElOIiwidiI6IjUwNTYyMjQiLCJhbnZhY2siOiJ2THJvQkE5WkJHM0p3VHZhT2xpYmJ0b1BiNkw0anFKbCIsInNoYXJlTGluayI6Imh0dHBzOi8vd2dudHYuY29tL25ld3MvbWFuLWNvbnZpY3RlZC1vZi1nb2xkLWNvYXN0LWF0bS1tdXJkZXItc2F5cy1oZS13YXMtZnJhbWVkLyIsInBsdWdpbnMiOnsiY29tc2NvcmUiOnsiY2xpZW50SWQiOiI2MDM2NDM5IiwiYzMiOiJ3Z250di5jb20iLCJzY3JpcHQiOiIvL3czLmNkbi5hbnZhdG8ubmV0L3BsYXllci9wcm9kL3YzL3BsdWdpbnMvY29tc2NvcmUvY29tc2NvcmVwbHVnaW4ubWluLmpzIiwidXNlRGVyaXZlZE1ldGFkYXRhIjp0cnVlLCJtYXBwaW5nIjp7InZpZGVvIjp7ImMzIjoid2dudHYuY29tIiwibnNfc3Rfc3QiOiJ3Z24iLCJuc19zdF9wdSI6Ik5leHN0YXIiLCJuc19zdF9nZSI6Ik5ld3MiLCJjc191Y2ZyIjoiIn0sImFkIjp7ImMzIjoid2dudHYuY29tIiwibnNfc3Rfc3QiOiJ3Z24iLCJuc19zdF9wdSI6Ik5leHN0YXIiLCJuc19zdF9nZSI6Ik5ld3MiLCJjc191Y2ZyIjoiIn19fSwiZGZwIjp7ImNsaWVudFNpZGUiOnsiYWRUYWdVcmwiOiJodHRwczovL3B1YmFkcy5nLmRvdWJsZWNsaWNrLm5ldC9nYW1wYWQvYWRzP3N6PTF4MTAwMCZpdT0vNTY3OC9ueC53Z250di9uZXdzJmltcGw9cyZnZGZwX3JlcT0xJmVudj12cCZvdXRwdXQ9dm1hcCZ1bnZpZXdlZF9wb3NpdGlvbl9zdGFydD0xJmFkX3J1bGU9MSZkZXNjcmlwdGlvbl91cmw9aHR0cHM6Ly93Z250di5jb20vbmV3cy9tYW4tY29udmljdGVkLW9mLWdvbGQtY29hc3QtYXRtLW11cmRlci1zYXlzLWhlLXdhcy1mcmFtZWQvJnZjb25wPTImY3VzdF9wYXJhbXM9dmlkJTNENTA1NjIyNCUyNmNtc2lkJTNEMTE3NzAzNiUyNnBpZCUzRDExNzcwMzYlMjZ2aWRjYXQlM0QlMkZuZXdzJTI2Ym9iX2NrJTNEJTVCYm9iX2NrX3ZhbCU1RCUyNmRfY29kZSUzRG5hMDAzJTI2cGxheWVyd2lkdGglM0Q4NzYlMjZwbGF5ZXJoZWlnaHQlM0Q0OTMifSwibGlicmFyeVJlcXVlc3RlZCI6dHJ1ZX0sIm5pZWxzZW4iOnsiYXBpZCI6IlBEMkVDNzA3Mi0yNzMwLTRDMzItQjJBMy1DOUFFRTc3ODI0RjQiLCJzZmNvZGUiOiJkY3IiLCJ0eXBlIjoiZGNyIiwiYXBuIjoiQW52YXRvIiwiZW52aXJvbm1lbnQiOiJwcm9kdWN0aW9uIiwidXNlRGVyaXZlZE1ldGFkYXRhIjp0cnVlLCJtYXBwaW5nIjp7ImFkbG9hZHR5cGUiOjIsImFkTW9kZWwiOjJ9LCJvcHRPdXQiOmZhbHNlfSwic2VnbWVudEN1c3RvbSI6eyJzY3JpcHQiOiJodHRwczovL3NlZ21lbnQucHNnLm5leHN0YXJkaWdpdGFsLm5ldC9hbnZhdG8uanMiLCJ3cml0ZUtleSI6Ill4bmkzSTE3T0trOUtUVWYxUm1tc3lZZXF4RmtFVG8yIn0sImdvb2dsZUFuYWx5dGljcyI6eyJ0cmFja2luZ0lkIjoiVUEtMzQxMzM4ODQtMTMiLCJldmVudHMiOnsiQURfU1RBUlRFRCI6eyJhbGlhcyI6IlZpZGVvLUFkIiwiY2F0ZWdvcnkiOiJWaWRlbyIsImxhYmVsIjoiW1tUSVRMRV1dIn0sIlZJREVPX1NUQVJURUQiOnsiYWxpYXMiOiJWaWRlby1QbGF5IiwiY2F0ZWdvcnkiOiJWaWRlbyIsImxhYmVsIjoiW1tUSVRMRV1dIn0sIlZJREVPX0ZJUlNUX1FVQVJUSUxFIjp7ImFsaWFzIjoiVmlkZW8tMjUlIiwiY2F0ZWdvcnkiOiJWaWRlbyIsImxhYmVsIjoiW1tUSVRMRV1dIn0sIlZJREVPX01JRF9QT0lOVCI6eyJhbGlhcyI6IlZpZGVvLTUwJSIsImNhdGVnb3J5IjoiVmlkZW8iLCJsYWJlbCI6IltbVElUTEVdXSJ9LCJWSURFT19USElSRF9RVUFSVElMRSI6eyJhbGlhcyI6IlZpZGVvLTc1JSIsImNhdGVnb3J5IjoiVmlkZW8iLCJsYWJlbCI6IltbVElUTEVdXSJ9LCJWSURFT19DT01QTEVURUQiOnsiYWxpYXMiOiJWaWRlby0xMDAlIiwiY2F0ZWdvcnkiOiJWaWRlbyIsImxhYmVsIjoiW1tUSVRMRV1dIn0sIlVTRVJfUEFVU0UiOnsiYWxpYXMiOiJQYXVzZSIsImNhdGVnb3J5IjoiVmlkZW8iLCJsYWJlbCI6IltbVElUTEVdXSJ9LCJVU0VSX1JFU1VNRSI6eyJhbGlhcyI6IlJlc3VtZSIsImNhdGVnb3J5IjoiVmlkZW8iLCJsYWJlbCI6IltbVElUTEVdXSJ9fX0sImhlYWx0aEFuYWx5dGljcyI6e319LCJodG1sNSI6dHJ1ZSwidG9rZW4iOiJleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpJVXpJMU5pSjkuZXlKMmFXUWlPaUkxTURVMk1qSTBJaXdpYVhOeklqb2lka3h5YjBKQk9WcENSek5LZDFSMllVOXNhV0ppZEc5UVlqWk1OR3B4U213aUxDSmxlSEFpT2pFMk16SXhOamc1TWpSOS5mLTBrVnZhOXY3ZUp4Q0VhcFB2ZHAwY1J4ZnFObDZ6TU9PQTZmUTU3QURZIn0%3D'
            frameborder='0'
            title='video'
            height={isSmallDevice ? '100%' : '500px'}
            width={isSmallDevice ? '100%' : '800px'}
          />

          <Typography variant='h4'>Lee Harris</Typography>
        </div>
        <div className={classes.border}></div>

        <div className={classes.bio}>
          <Typography variant='body1' style={{margin: '2% 0'}}>
            Lee Harris spent most of his adult life trying to help the young residents of the Cabrini Green Public housing complex. 
            He coached the girls’ softball team and was a community activist that helped elect Mayor Jane Bynre. Lee was also friends with the police – or so he thought. 
          </Typography>

          <Typography variant='body1' style={{margin: '2% 0'}}>
            In 1989 Dana Feitler, was shot and killed in the well-to-do Gold Coast neighborhood in Chicago. 
            She was shot in the back of the head after removing $400 from an ATM. The case became a media sensation, not only because Feitler was a young, wealthy, white girl, 
            but also because ATMs were new in Chicago. The case made national headlines and caused debates over the safety of the new machines. 
          </Typography>

          <Typography variant='body1' style={{margin: '2% 0'}}>
            Feitler’s parents offered a $25,000 reward for information leading to the arrest of Feitler’s murderer. Because the police knew that Lee had helped them on other cases in the past, 
            they sought his assistance in solving Feitler’s murder.  Lee, who had fallen on hard times, needed the money and wanted to help his “friends.”  
            Police reports indicate Lee Harris was a cooperating witness for months.  Lee reports that police told him their theory of the case, and he made statements comporting with their theory.  
            Things changed when the Cook County State’s Attorney refused to press charges against their target suspects.  
            After that, the lead detective, Richard Zuley, had to solve the murder and turned on Lee, using his own words against him.   
            Richard Zuley has a notorious history of coercing “confessions.”  
            Zuley’s role as a Guantanamo interrogator, placed there after he was called into duty as a lieutenant in the Navy Reserve, received wide attention in a two-part series by Spencer Ackerman in a British newspaper, The Guardian, in 2015. 
            Ackerman interviewed several former military investigators and culled details from the Senate report as well as one of his victim’s memoirs, Guantanamo Diary, to paint a portrait of 
            Zuley as a brutal interrogator that obtained ineffective results.
          </Typography>

          <Typography variant='body1' style={{margin: '2% 0'}}>
            Jennifer Blagg’s investigations have revealed that the Harris case contains almost every factor typically seen in a wrongful conviction – a heater case that police had to solve, 
            coercive police conduct by Chicago Police Officers led by Detective Zuley, a lying jailhouse snitch, and a suspect identification.
          </Typography>

          <div><Typography variant='span' style={{margin: '2% 0'}}>
            Richard Zuley put the case against Harris together with duct tape. It’s unraveling now. Due to the efforts of Lee's former cellmate, and life-long friend, 
            Robert Chattler over 66,000 people have signed a petition demanding Lee's release from prison. Join the cause 
          </Typography><a href='https://www.change.org/p/new-trial-for-an-innocent-man'> #FreeLee.</a></div>
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

export default Harris;
