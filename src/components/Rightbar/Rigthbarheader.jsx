import React, { useState } from "react";

import { useContext } from "../../context/Context";

import "./Rightbarheader.scss";
export default function Rigthbarheader() {
  const { setRightbarheader } = useContext();
  const [bg, setBg] = useState("all");
  if (bg === "all") {
    setRightbarheader("all");
  } else if (bg === "music") {
    setRightbarheader("music");
  } else if (bg === "vidio") {
    setRightbarheader("vidio");
  } else {
    setRightbarheader("futbol");
  }
  return (
    <div className="rigthbar_header_wrapper">
      <div className={bg === "all" ? "bg" : "rightbar_item"} onClick={() => setBg("all")}>
        All
      </div>
      <div className={bg === "music" ? "bg" : "rightbar_item"} onClick={() => setBg("music")}>
        Music
      </div>
      <div className={bg === "vidio" ? "bg" : "rightbar_item"} onClick={() => setBg("vidio")}>
        Vidio
      </div>
      <div className={bg === "futbol" ? "bg" : "rightbar_item"} onClick={() => setBg("futbol")}>
        Futbol
      </div>
    </div>
  );
}
