import React from "react";
import Navbar from './Navbar';
import Footer from './Footer'
const BaseLayout = (props) => {
  return <>
    <Navbar />
    <br />
    {props.children}
    <br />
    <Footer />
  </>
};
export default BaseLayout;