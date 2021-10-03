import Theme from "../styles/theme";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Head>
          <title>Pyae Phyo Thant | Info</title>
          <meta
            property="og:title"
            content="pyae phyo thant personal information"
            key="title"
          />
        </Head>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
