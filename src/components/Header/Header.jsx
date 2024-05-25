import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { useContext } from "../../context/Context";

import { ytLogo } from "../../assets";

import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  const { setIsSidebarOpen, getSearch } = useContext();
  const { register, handleSubmit } = useForm();
  const [query, setQuery] = useState(null);

  const onSubmit = (data) => {
    setQuery(data.query);
    getSearch(data.query);
    navigate("/");
  };

  return (
    <div className="header_wrapper">
      <div className="container header__container">
        <div className="header_actions">
          <button className="header_toggler" onClick={() => setIsSidebarOpen((p) => !p)}>
            <i className="fa-solid fa-bars"></i>
          </button>
          <Link to={`/`}>
            <img src={ytLogo} alt="YouTube Logo" />
          </Link>
        </div>

        <search className="header_search">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Search" {...register("query")} />
          </form>
        </search>
      </div>
    </div>
  );
};

export default Header;
