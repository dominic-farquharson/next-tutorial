import React from 'react';
import cowsay from 'cowsay-browser';
import Head from 'next/head';
import Navbar from '../components/Navbar';

export default () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Navbar />
    <pre>{cowsay.say({ text: 'hi there!' })}</pre>
  </div>
);
