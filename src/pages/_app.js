import Theme from "../styles/theme";
import "../styles/globals.css";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { UserProvider } from "@auth0/nextjs-auth0";

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
          <UserProvider>
            <Component {...pageProps} key={router.route} />
          </UserProvider>
        </AnimatePresence>
      </Theme>
    </>
  );
}
