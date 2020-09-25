import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';

import SimpleContactLanding from "./../components/simple-contact-landing"
 const analyticsScriptTag = () => {
    return {
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-XXXXXXX-X');
      `
    };
};

const Page = () => (
    <>
        <Head>
            <title>Contact</title>
            {/* Global site tag (gtag.js) - Google Analytics */}
            <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=UA-134715104-1"
            />
            <script dangerouslySetInnerHTML={analyticsScriptTag()} />
        </Head>
        <main>
        <SimpleContactLanding />
</main>

    </>
);

export default withRouter(Page);
