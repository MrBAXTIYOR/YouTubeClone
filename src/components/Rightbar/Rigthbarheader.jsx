import React, { useState } from "react";

import { useContext } from "../../context/Context";

import "./Rightbarheader.scss";

export default function Rightbarheader() {
  const { setRightbarheader, getSearch } = useContext();
  const [bg, setBg] = useState("all");

  const handleBgChange = (newBg) => {
    setBg(newBg);
    setRightbarheader(newBg);
    getSearch(newBg);
  };

  return (
    <div className="rightbar_header_wrapper">
      <div className={bg === "all" ? "bg" : "rightbar_item"} onClick={() => handleBgChange("all")}>
        All
      </div>
      <div className={bg === "music" ? "bg" : "rightbar_item"} onClick={() => handleBgChange("music")}>
        Music
      </div>
      <div className={bg === "vidio" ? "bg" : "rightbar_item"} onClick={() => handleBgChange("vidio")}>
        Vidio
      </div>
      <div className={bg === "futbol" ? "bg" : "rightbar_item"} onClick={() => handleBgChange("futbol")}>
        Futbol
      </div>
    </div>
  );
}
