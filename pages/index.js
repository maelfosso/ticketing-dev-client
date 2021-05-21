import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  console.log('CURRENT USER', currentUser);
  return <h1>Landing page</h1>;
}

LandingPage.getInitialProps = async () => {
  if (typeof window === 'undefined') {
    // we are on the server!
    // request should be made to http://ingress-nginx.i
    const { data } = await axios.get(
      'http://ingress-nginx.kube-system.svc.cluster.local/api/users/currentuser', {
        'headers': {
          Host: 'ticketing.dev'
        }
      }
    )
    console.log('WINDOWS UNDEFINED');


    return data;
  } else {
    // we are on the browser
    // request can be made with a base url of ''
    const { data } = await axios.get('/api/users/currentuser');

    return data;
  }
  return {};
}

export default LandingPage;
