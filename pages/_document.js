import Document, {Html, Main, Head, NextScript} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,300;1,400&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Bonfire X  Take your chance merch to the next level"
          />
        </Head>
        <Main />
        <NextScript />
      </Html>
    );
  }
}
export default MyDocument;
