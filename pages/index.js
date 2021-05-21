import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  // console.log('into the component', currentUser);
  // axios.get('/api/users/currentuser');


  return <h1>Landing page</h1>;
}

LandingPage.getInitialProps = async () => {
  if (typeof window === 'undefined') {
    // we are on the server!
    // request should be made to http://ingress-nginx.i
  } else {
    // we are on the browser
    // request can be made with a base url of ''
  }
  return {};
}

export default LandingPage;
