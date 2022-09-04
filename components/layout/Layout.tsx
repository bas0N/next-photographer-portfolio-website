import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout(props) {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
