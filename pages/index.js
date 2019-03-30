import React from 'react';
import Head from 'next/head';

function IndexPage() {
    return (
        <React.Fragment>
            <Head>
                <title>
                    Alkolåsteam – Alkolås, Installation & villkorat körkort
                    efter rattfylleri
                </title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Lato:400,700"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="/static/assets/style/main.css"
                />
            </Head>
            <div className="main">
                <div className="header">
                    <div className="header__inner">
                        <h1 className="logo">
                            <img
                                src="/static/assets/images/alkolasteam.png"
                                alt="Logga"
                            />
                            <span>Alkolåsteam</span>
                        </h1>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default IndexPage;
