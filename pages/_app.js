import "../styles/globals.css";
import { Fragment } from "react";
import Navbar from "../components/layout/Navbar.tsx";
import Footer from "../components/layout/Footer.tsx";
import Layout from "../components/layout/Layout.tsx";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
