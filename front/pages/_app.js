import React from 'react';
import Head from 'next/head';
import propTypes from 'prop-types';
import wrapper from '../store/configureStore';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  }
  body {
    background-color: #F5F6F7;
    width:100%;
    /* overflow: hidden; */
  }
`;

const Postmoa = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>Postmoa</title>
      </Head>
      <Normalize />
      <GlobalStyle />
      <Component />
    </>
  );
};

Postmoa.propTypes = {
  Component: propTypes.elementType.isRequired,
};

export default wrapper.withRedux(Postmoa);
