import Theme from "../styles/theme";
import "../styles/globals.css";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }) {
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
        <AnimatePresence>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Theme>
    </>
  );
}
