import React from 'react';
import Head from 'next/head';

import Hero from '../components/Hero/hero.component';
import Sidebar from '../components/Sidebar/Sidebar.component';
import Directory from '../components/Directory/Directory.component';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Marketplace</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Sidebar />
        <Directory />
      </main>

      <footer>
       
      </footer>

      <style jsx>
        {`
          .container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            //justify-content: center;
            //align-items: center;
          }

          main {
            display: grid;
            //min-height: 100vh;
            grid-template-columns: repeat(12, 1fr);
            //column-gap: 2rem;
            row-gap: 8rem;
            align-items: center;
          }

          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          footer img {
            margin-left: 0.5rem;
          }

          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .logo {
            height: 1em;
          }

          a {
            color: inherit;
            text-decoration: none;
          }
        `}
      </style>
    </div>
  );
}
