import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroImage from '../../static/case_page_imgs/taylor_page.jpg';

import { commonStyles } from '../commonStyles';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const articles = [
  {
    title: "Law School's Exoneration Project Helps Free Wrongly Convicted Man",
    link: 'http://news.gnom.es/news/law-school%E2%80%99s-exoneration-project-helps-free-wrongly-convicted-man'
  },
  {
    title: "$40M wrongful conviction settlement: 'The money is almost beside the point'",
    link: 'http://www.chicagotribune.com/news/local/breaking/chi-40m-wrongful-conviction-settlement-the-money-is-almost-beside-the-point-20140625-story.html'
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
      maxHeight: '500px'
    },

    '& h4': {
      fontWeight: 'bold',
      margin: '2% 0',
      textAlign: 'center'
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

const Taylor = () => {
  const isSmallDevice = useMediaQuery('@media only screen and (min-device-width: 250px) and (max-device-width: 812px)');
  if (isSmallDevice) {
    styles.hero['& h4'].fontSize = '1.2rem';
    styles.articles.width = '80%';
    styles.hero['& img'].width = '90vw';
  }

  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      
      <div className={classes.page}>

        <div className={classes.hero}>
          <img src={heroImage} />

          <Typography variant='h4'>Robert Taylor</Typography>
        </div>
        <div className={classes.border}></div>

        <div className={classes.bio}>
          <Typography variant='body1' style={{margin: '2% 0'}}>
            On November 19, 1991, a 14-year-old disappeared while on her way home from her grandmother’s house in Dixmoor, Illinois. 
            Her body was found in a field near Interstate 57. Her killing had all the hallmarks of a rape-murder. 
            The Illinois State Police spear-headed the investigation. During an interview a fifteen year boy allegedly told officers that he had a 
            conversation with Jonathan Barr where Barr told him about seeing the victim get into a car with Veal and Robert Taylor. 
            Based on this interview, police brought in Robert Taylor, Sharpe, and Veal in for questionings. All three boys ultimately confessed. 
            The two remaining boys, Harden and Barr, did not sign statements. All five juveniles were ultimately charged as adults with first-degree murder, aggravated criminal sexual assault, and armed robbery.
          </Typography>

          <Typography variant='body1' style={{margin: '2% 0'}}>
            In June of 1994, the ISP conducted pre-trial DNA testing on the vaginal and rectal swabs collected from the victim's autopsy, 
            producing a single-source male DNA profile that excluded all five juveniles. The State continued prosecuting all five juveniles despite 
            the exculpatory DNA results. In June of 1995, Veal and Sharp accepted plea deals in exchange for their testimony against Harden, Barr, and Taylor. 
            Veal and Sharp pled guilty to first-degree murder, while prosecutors dropped their aggravated criminal sexual assault charges and agreed to sentence them to twenty (20) years. 
            The other boys’ cases proceeded to trial. Taylor, Harden, and Barr we were convicted despite the fact that DNA swabs from the victim did not match any of the defendants.
          </Typography>

          <Typography variant='body1' style={{margin: '2% 0'}}>
            Jennifer Blagg first represented Robert Taylor in 2007 when working at the Office of the State Appellate Defender.  
            She always believed in his innocence.  After beginning her private practice, she contacted the Center on Wrongful Convictions about his case.  The Center agreed to be co-counsel on the case.  
            In 2009, Jennifer Blagg and the Center for Wrongful Convictions, along with the Innocence Project and Exoneration Project, appeared on the case. 
            They were able to obtain post-conviction DNA testing. The testing show that the DNA swabs match a man with an extensive criminal history dating back to the mid 1970s, including convictions for deviate sexual assault and rape.
          </Typography>

          <Typography variant='body1' style={{margin: '2% 0'}}>
            Jennifer Blagg and her co-counsels successfully obtained the release of Taylor and his co-defendants, Jonathan Barr and James Harden. 
            A civil suit was filed against Dixmoor police and Illinois State Police which resulted the largest settlement ever obtained at the time in a wrongful conviction case. 
            Later, the case was profiled on 60 Minutes, where Jennifer’s co-counsel, Peter Neufeld, deemed Chicago the “False Confession Capital."
          </Typography>
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


      </div>

      <Footer />
    </div>
  )
}

export default Taylor;
