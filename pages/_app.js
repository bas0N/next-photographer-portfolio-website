import "../styles/globals.css";
import { Fragment } from "react";
import Navbar from "../components/layout/Navbar.tsx";
import Footer from "../components/layout/Footer.tsx";
function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
