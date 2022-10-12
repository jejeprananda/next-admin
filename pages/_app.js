import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>JEJE Web</title>
      </Head>
      <Layout>
        <div className="dark:text-slate-200">
          <Component {...pageProps} />
          <script
            defer
            src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"
            integrity="sha384-rOA1PnstxnOBLzCLMcre8ybwbTmemjzdNlILg8O7z1lUkLXozs4DHonlDtnE7fpc"
            crossorigin="anonymous"
          ></script>
        </div>
      </Layout>
    </>
  );
}

export default MyApp;
