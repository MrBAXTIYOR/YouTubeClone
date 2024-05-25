import React from "react";
import cx from "classnames";

import { useContext } from "../../context/Context";

import "./Rightbarheader.scss";

export default function Rightbarheader({ bg, setBg }) {
  const { getSearch } = useContext();

  const handleBgChange = (newBg) => {
    setBg(newBg);
    getSearch(newBg);
  };

  const categories = ["All", "Music", "Video", "Futbol"];

  return (
    <div className="rightbar_header_wrapper">
      {categories.map((category) => (
        <div className={cx("rightbar_item", category === bg && "bg")} onClick={() => handleBgChange(category)}>
          {category}
        </div>
      ))}
    </div>
  );
}
