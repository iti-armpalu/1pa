import { useEffect } from "react";
import Head from "next/head";

import Layout from "@/components/layout/layout";

// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";

// add global styles (needs to come after Bootstrap import)
import "../styles/globals.css";

// add fontawesome
import { config } from "@fortawesome/fontawesome-svg-core";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

// add gsap
import { gsap } from "gsap";


export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
