import Theme from "../styles/theme";
import "../styles/globals.css";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { UserProvider } from "@auth0/nextjs-auth0";
import { useEffect } from "react";
import { useRouter } from "next/router";

import * as ga from "../../lib/ga";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
