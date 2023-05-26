import { useEffect } from "react";
import Head from "next/head";

import Layout from "@/components/layout/layout";

import 'react-modal-video/css/modal-video.css';


// Add bootstrap css
import "bootstrap/dist/css/bootstrap.css";

// Add global styles (needs to come after Bootstrap import)
import "../styles/globals.css";



// Add fontawesome
import { config } from "@fortawesome/fontawesome-svg-core";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

// Add Google font
import { PT_Mono } from "@next/font/google";
const ptMono = PT_Mono({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"]
});


export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={ptMono.className}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
