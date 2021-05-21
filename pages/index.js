import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
  console.log('CURRENT USER', currentUser);
  return <h1>Landing page</h1>;
}

LandingPage.getInitialProps = async ({ req }) => {
  const client = buildClient({ req });
  const { data } = await client.get('/api/users/currentuser');
  return data;
}

export default LandingPage;
