import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import Hero from '../components/Hero/hero.component';
import Sidebar from '../components/Sidebar/Sidebar.component';
import Directory from '../components/Directory/Directory.component';
import Container from '../components/Container/Container.styles';
import MainContainer from '../components/Container/Main.styles';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (!router.query?.assetType) router.push('/?assetType=products', undefined, { shallow: true });
  }, []);

  return (
    <Container width="100%" flexDirection="column">
      <Head>
        <title>Marketplace</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer>
        <Hero />
        <Sidebar />
        <Directory />
      </MainContainer>
    </Container>
  );
}
