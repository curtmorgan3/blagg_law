import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroImage from '../../static/case_page_imgs/mcintosh_page.jpg';

import { commonStyles } from '../commonStyles';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const articles = [
  {
    title: 'Inmate for 15 years freed after conviction tossed in Chicago killing',
    link: 'http://www.chicagotribune.com/news/local/breaking/ct-murder-charges-dropped-mcintosh-met-20161004-story.html'
  },
  {
    title: 'Wrongly-convicted man returns home to terminally-ill father who fought for his freedom',
    link: 'https://wgntv.com/news/wrongly-convicted-man-returns-home-to-terminally-ill-father-who-fought-for-his-freedom/'
  },
  {
    title: 'Chicago Man Freed From Prison After Serving 14 Years For Crime He Didn’t Commit',
    link: 'https://chicago.cbslocal.com/2016/10/04/chicago-man-freed-from-prison-after-serving-14-years-for-crime-he-didnt-commit/'
  },
  {
    title: 'Ex-inmate sues over murder conviction, alleges Chicago police rigged evidence',
    link: 'https://www.chicagotribune.com/news/breaking/ct-wrongful-conviction-lawsuit-met-20170901-story.html'
  },
]

const styles = {
  ...commonStyles, 
  hero: {
    width: '90.9vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '& img': {
      width: '90.9vw',
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

const Mcintosh = () => {
  const isSmallDevice = useMediaQuery('@media only screen and (min-device-width: 250px) and (max-device-width: 812px)');
  if (isSmallDevice) {
    styles.hero['& h4'].fontSize = '1.2rem';
    styles.articles.width = '80%';
  }

  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      
      <div className={classes.page}>

        <div className={classes.hero}>
          <img src={heroImage} />

          <Typography variant='h4'>Norman McIntosh</Typography>
        </div>
        <div className={classes.border}></div>

        <div className={classes.bio}>
          <Typography variant='body1' style={{margin: '2% 0'}}>
            A jury found Norman McIntosh guilty of the 2001 murder of Devon Hobson after three eyewitnesses identified him as the shooter. 
            He was sentenced to 45 years imprisonment. Before he was sentenced, McIntosh told Judge Clay, “Now that it is over … I did really want you to know I really didn't kill them. 
            I don't even know them…. The police officer have a reason to hate me. He told me he was going to get me one day. 
            I didn't think it was going to be this bad, but I guess so. I just really want you to know after it was over that I really didn't shoot them people.”
          </Typography>

          <Typography variant='body1' style={{margin: '2% 0'}}>
            Since that day, McIntosh fought to prove his innocence. It took almost 15 years for him to prove it, but the Cook County State’s 
            Attorney eventually acknowledged the truth of what McIntosh told the judge over a decade ago.
          </Typography>

          <Typography variant='body1' style={{margin: '2% 0'}}>
            Jennifer Blagg began her representation of Norman McIntosh in 2010. When she first appeared, McIntosh had filed a pro se post conviction 
            petition arguing his actual innocence. He supported that argument with an affidavit from the victim’s brother. 
            Later, Blagg obtained an affidavit from the brother. He not only recanted his prior identification of McIntosh as the perpetrator, 
            but he also provided the name of the man that he believed actually shot him and killed his brother. 
            Blagg later located the remaining two eyewitnesses, who were 12 at the time Hobson was shot. 
            Both recanted and provided consistent statements as to why they falsely identified McIntosh.  
            Subsequently, Blagg asked for the perpetrator’s fingerprints be compared to prints found on items the perpetrator owned.  
            McIntosh’s prints were not there and the alternate suspect’s were.   Blagg also proved that the alternate suspect drove a vehicle matching the eyewitnesses’ 
            description of the shooter’s car, while her client did not. She also proved that the alternate suspect’s 
            vehicle was destroyed days after her client was falsely accused of the victim’s murder.
          </Typography>

          <Typography variant='body1' style={{margin: '2% 0'}}>
            Based on this evidence, along with other evidence of police misconduct, Blagg filed an amended post conviction petition. 
            After the Conviction Integrity Unit declined to exonerate McIntosh, Blagg filed a 2-1401 petition and demanded the prosecution 
            answer within 30 days. Subsequently, the Cook County State’s Attorney re-opened the investigation.  
            After Blagg presented the case to the Chief Deputy, the office agreed that McIntosh’s conviction lacked integrity and dismissed all charges.  
            Blagg paired with Loevy and Loevy to file McIntosh’s civil lawsuit, which is pending at this time.
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

        <div className={classes.border} style={{marginTop: '2%'}}></div>

      </div>

      <Footer />
    </div>
  )
}

export default Mcintosh;
