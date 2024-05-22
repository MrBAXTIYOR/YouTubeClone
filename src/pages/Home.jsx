import React from "react";

import { useContext } from "../context/Context";

import Rightbar from "../components/Rightbar/Rightbar";

export default function Home() {
  const { rightbarOpen } = useContext();
  return (
    <div className="container">
      <div className={rightbarOpen ? "bar_wrapper open" : "bar_wrapper"}>
        <Rightbar />
      </div>
    </div>
  );
}
