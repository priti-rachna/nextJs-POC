import React, { ReactNode } from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

const Layout = (props: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
