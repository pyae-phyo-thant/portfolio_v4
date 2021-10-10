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
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-209807215-1"
          ></script>
          <script>
            window.dataLayer = window.dataLayer || []; function gtag()
            {dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', 'UA-209807215-1');
          </script>
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
