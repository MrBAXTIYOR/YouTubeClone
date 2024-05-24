import React from "react";
import { Helmet } from "react-helmet";

import { useContext } from "../context/Context";

import Rightbar from "../components/Rightbar/Rightbar";

export default function Home() {
  const { rightbarOpen } = useContext();
  return (
    <>
      <Helmet>
        <title>YouTube | Home</title>
      </Helmet>
      <div className="container">
        <div className={rightbarOpen ? "bar_wrapper open" : "bar_wrapper"}>
          <Rightbar />
        </div>
      </div>
    </>
  );
}
