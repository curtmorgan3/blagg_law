import bannister from '../static/case_imgs/bannister.gif';
import scaggs from '../static/case_imgs/scaggs.jpeg';
import villa from '../static/case_imgs/villa.jpeg';
import meller from '../static/case_imgs/meller.jpeg';
import garrett from '../static/case_imgs/garrett.jpeg';
import griggs from '../static/case_imgs/griggs.jpeg';


export const pendingcases = [
  {
    name: 'JAMES BANNISTER',
    img: bannister,
    bio: "The State offered Bannister’s co-defendant a deal no man could refuse. After Bannister’s conviction, his co-defendant admitted that he lied when he said Bannister was present for the shooting.",
    featured: false,
    link:'/bannister'
  },
  {
    name: 'DANIEL MELLER',
    img: meller,
    bio: "Daniel Meller was wrongfully convicted based on the false testimony of an informant. Detectives failed to disclose exculpatory evidence of innocence. Blagg investigates Meller’s innocence.",
    featured: false,
  },
    
  {
    name: 'ANTHONY GARRETT',
    img: garrett,
    bio: "Blagg fights to secure Anthony Garrett’s release arguing that Area Six detectives including Detective Richard Zuely coerced Garrett to falsely confess to murder he did not commit.",
    featured:  false,
    link:'https://www.audible.com/pd/The-Last-Days-of-Cabrini-Green-Audiobook/B0DLX31RNW'
  },
  {
    name: 'ANDRE GRIGGS',
    img: griggs,
    bio: "Notorious Detective Richard Zuely coerced Griggs to falsely confess to a crime he did not commit.",
    featured:  false,
  },
  {
    name: 'TRISTAN SCAGGS',
    img: scaggs,
    bio: "Jennifer Blagg files post-conviction petition alleging that police misconduct resulted in the wrongful incarceration of Tristan Scaggs. Blagg presents evidence officers engaged in a pattern of misconduct.",
    featured: true,
    link: '/scaggs'
  },
]