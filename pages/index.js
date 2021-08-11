import Head from 'next/head';
import Features from '../components/Features/Features';
import Header from '../components/Header/Header';
import Gallery from '../components/Gallery/Gallery';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bonfire X</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Features />

      <Gallery />
      <Footer />
    </>
  );
}
