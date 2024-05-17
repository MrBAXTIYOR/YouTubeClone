import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { useContext } from "../../context/Context";
import customAxios from "../../service/axios";
import Rigthbarheader from "./Rigthbarheader";
import Card from "../Card/Card";

import "./Rightbar.scss";

export default function Rightbar() {

 const {setIsLoading,isLoading} =useContext() 
   const {vidio,setVidio} = useContext()
   
  const getData = async () => {
    setIsLoading(true);
    try {
      const { data } = await customAxios.get("/trending/", {
        params: {
          lang: "en",
          country: "us",
          section: "Now",
        },
      });
      setVidio(data.videos);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="loader">
          <div className="loaderInner" />
        </div>
      ) : (
        <div className="rigthbar_wrapper">
          <Rigthbarheader />
          <div className="card">
            {vidio &&
              vidio.map((vid) => (
                <Link to={`/videos/${vid.video_id}`}>
                  <Card key={uuidv4()} {...vid} />
                </Link>
              ))}
          </div>
        </div>
      )}
    </>
  );
}
