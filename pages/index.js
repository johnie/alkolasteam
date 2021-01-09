import React from 'react';
import Head from 'next/head';

function IndexPage() {
  return (
    <React.Fragment>
      <Head>
        <title>
          Alkolåsteam – Alkolås, Installation & villkorat körkort efter
          rattfylleri
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700"
          rel="stylesheet"
        />
        <link rel="stylesheet" type="text/css" href="/assets/style/main.css" />
      </Head>
      <div className="main">
        <div className="header">
          <div className="header__inner">
            <div className="header__first">
              <h1 className="logo">
                <img src="/assets/images/alkolas.svg" alt="Logga" />
                <span className="visually-hidden">Alkolåsteam</span>
              </h1>
            </div>
            <div className="header__second">
              <h2>Kontakt</h2>
              <p>
                <strong>Adress:</strong>Söderbyvägen 4,
                <br />
                195 60 Arlandastad
              </p>
              <p>
                <strong>Email:</strong>
                <a href="mailto:info@radioteknik.se">info@radioteknik.se</a>
              </p>
              <p>
                <strong>Tel:</strong>08-623 16 80
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default IndexPage;
