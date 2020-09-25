import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import "bootstrap/dist/css/bootstrap.css";
// import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
import GlobalStyles from '../global-styles';
import Layout from '../components/layout/layout';

export default class MyApp extends App {

    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <Head>
                    {/* Add common head elements here */}
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width"
                        key="viewport"
                    />
                </Head>
                <GlobalStyles />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </>
        );
    }
}