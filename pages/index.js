const LandingPage = ({ color }) => {
  console.log('I am in the component ', color);

  return <h1>Landing page</h1>;
}

LandingPage.getInitialProps = () => {
  console.log('I am on a the server');

  return { color: 'red' };
}

export default LandingPage;
