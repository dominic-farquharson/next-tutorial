import React, { Component } from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import Navbar from '../components/Navbar';

export default class Jokes extends Component {
  // static method called directly on the class
  static async getInitialProps({ req, pathname }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return {
      userAgent,
    };
  }

  render() {
    return (
      <div>
        <Head>
          <title>Jokes page</title>
        </Head>
        <Navbar />
        <h1>Jokes page</h1>
        <p>Path: {this.props.pathname}</p>
        Hello world this is {this.props.userAgent}
      </div>
    );
  }
}
