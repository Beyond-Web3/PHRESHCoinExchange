import "../styles/globals.css";
import Layout from "../components/Layout/layout";
import { useMoralis } from "react-moralis";
import { MoralisProvider } from "react-moralis";
import Moralis from "moralis/dist/moralis.min.js";
import { MoralisDappProvider } from "../providers/MoralisDappProvider/MoralisDappProvider";
function MyApp({ Component, pageProps }) {
  const secret = process.env.ADMIN;
  const appId = process.env.APPID;
  const serverUrl = process.env.SERVERURL;

  return (
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <MoralisDappProvider value={{}}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MoralisDappProvider>
    </MoralisProvider>
  );
}

export default MyApp;
