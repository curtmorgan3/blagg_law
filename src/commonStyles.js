export const commonStyles = {
  page: {
    backgroundColor: '#808080',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '500px',
    height: '100%',

    '& h1,h2,h3,h4,h5,h6,p,span': {
      fontFamily: 'optima, sans-serif',
      color: '#ffffff',
    },

    a: {
      textDecoration: 'none'
    }
  },
  border: {
    width: '90.9%',
    height: '5px',
    backgroundColor: '#ffffff'
 
  },
  header: {
    height: '60px',
    width: '300px',
    border: '2px solid #ffffff',
    backgroundColor: '#3E485A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2%',
    '& h5': {
      fontWeight: 'bold'
    }
  }
}