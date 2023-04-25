import { Fragment } from 'react';
import Head from 'next/head';

function PeoplePage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name='description' content='Send me your messages!' />
      </Head>
      <h1>Hello people</h1>
    </Fragment>
  );
}

export default PeoplePage;