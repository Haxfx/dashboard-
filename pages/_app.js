import React from "react";
import App from "next/app";
import { AnimatePresence } from "framer-motion";

import "../styles/globals.css";

class Dashboard extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <div className="bg-purple-background font-Poppins text-white h-screen">
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </div>
    );
  }
}

export default Dashboard;
