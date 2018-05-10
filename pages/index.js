import React from 'react';
import cowsay from 'cowsay-browser';
import Head from 'next/head';

export default () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <pre>{cowsay.say({ text: 'hi there!' })}</pre>
  </div>
);
