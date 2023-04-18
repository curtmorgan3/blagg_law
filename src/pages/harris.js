import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroImage from '../../static/case_page_imgs/harris_page.jpeg';

import { commonStyles } from '../commonStyles';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const articles = [
  {
    title: 'Chicago man released from prison after murder conviction vacated after serving nearly 30 years',
    link: 'https://abc7chicago.com/chicago-murder-prisoner-release-lee-harris-dana-feitler/12964803/'
  },
  {
    title: 'Man wrongfully convicted of 1989 Gold Coast murder is freed',
    link: 'https://www.fox32chicago.com/news/man-wrongfully-convicted-1989-gold-coast-murder-freed-thursday'
  },
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
          <img src={heroImage} />

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
            She was shot in the back of the head after removing $400 from an ATM. The case became a media sensation for a variety of reasons, including the fact that ATMs were new in Chicago.
          </Typography>

          <Typography variant='body1' style={{margin: '2% 0'}}>
            Feitler’s parents offered a $25,000 reward for information leading to the arrest of Feitler’s murderer. Because the police knew that Lee had helped them on other cases in the past, 
            they sought his assistance in solving Feitler’s murder.  Lee, who had fallen on hard times, needed the money and wanted to help his “friends.”  
            Police reports indicate Lee Harris was a cooperating witness for months.  The prosecution paid for his housing, gave him meals, and Harris had around-the-clock police protection. Lee reports that police told him their theory of the case, and he made statements comporting with their theory.  
            Things changed when the Cook County State’s Attorney refused to press charges against their target suspects.  
            After that, the lead detective, Richard Zuley, had to solve the murder and turned on Lee, using his own words against him.   
            Detective Richard Zuley has a notorious history of wrongful convictions and coercing false “confessions.”   
            Most notoriously, Zuley crafted the interrogation plan for Mohamedou Slahi at Guantanamo Bay.  Zuley’s role in the interrogation and torture of  Slahi received wide attention in a two-part series by Spencer Ackerman in a British newspaper, The Guardian, in 2015. Later, Slahi wrote about Zuley in his book, Guantánamo Diary.  He was known to Slahi as "Captain Collins," and his role in crafting the interrogation tactics used on Shali is profiled in the award winning movie based the Guantánamo Diary, "The Mauritanian."  
            
          </Typography>

          <Typography variant='body1' style={{margin: '2% 0'}}>
            Jennifer Blagg’s investigations have revealed that the Harris case contains almost every factor typically seen in a wrongful conviction – a heater case that police had to solve, 
            coercive police conduct by Chicago Police Officers led by Detective Zuley, a lying jailhouse snitch, and a suspect identification.
          </Typography>

          <div><Typography variant='span' style={{margin: '2% 0'}}>
            Richard Zuley put the case against Harris together with duct tape. Now it has unraveled. After over 30 years in prison, Jennifer convinces the Cook County State's Attorney's Office to vacate Lee's conviction and drop all charges against him. Lee is pictured above eating a cheeseburger, his first meal after being released from prison.
          </Typography></div>
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
