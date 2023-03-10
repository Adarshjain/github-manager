/* eslint-disable */
import { SessionProvider } from "next-auth/react"

import "../styles/globals.css";

const MyApp = ({
    Component,
    pageProps: { session, ...pageProps }
}) => {
  console.log("NEXTAUTH_URL", process.env.NEXTAUTH_URL)

  return <SessionProvider session={session}>
               <Component {...pageProps} />
             </SessionProvider>;
};

export default MyApp;
