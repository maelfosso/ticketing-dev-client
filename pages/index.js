import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
  return currentUser ? <h1>You are signed in </h1> : <h1>Landing page</h1>;
}

LandingPage.getInitialProps = async ({ req }) => {
  console.log('Landing Page');
  
  const client = buildClient({ req });
  const { data } = await client.get('/api/users/currentuser');
  return data;
}

export default LandingPage;
