import React, { useEffect, useState } from "react";

import { profilePic, ytLogo } from "../../Assets";

import { useContext } from "../../context/Context";

import "./Header.scss";
import { useForm } from "react-hook-form";
import customAxios from "./../../service/axios";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { setIsSidebarOpen, setVidio, rightbarheader } = useContext();
  const { register, handleSubmit } = useForm();
  const [query, setQuery] = useState(null);
  const getSearch = async (query) => {
    const { data } = await customAxios.get("/search/", {
      params: {
        query: query || rightbarheader,
        lang: "en",
        order_by: "this_month",
        country: "us",
      },
    });
    console.log(data);
    setVidio(data.videos);
    navigate("/");
  };
  
  return (
    <div className="header_wrapper">
      <div className="header_icon">
        <button className="header_toggler" onClick={() => setIsSidebarOpen((p) => !p)}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <Link to={`/`}>
          <img src={ytLogo} alt="" />
        </Link>
      </div>
      <form className="header_search" onSubmit={handleSubmit((data) => setQuery(getSearch(data.query)))}>
        <input type="text" placeholder="Search" {...register("query")} />
      </form>
    </div>
  );
};

export default Header;
