import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import YouTube from "react-youtube";
import { v4 as uuidv4 } from "uuid";

import customAxios from "./../service/axios";
import { useContext } from "../context/Context";
import VideoItem from "../components/VideoItem/VideoItem";

import "./css/main.css";
const Vidio = () => {
  const [video, setVideo] = useState();
  const {setIsSidebarOpen} = useContext();
  const { id } = useParams() || "";
  const getVideo = async () => {
    const { data } = await customAxios.get("/video/details", {
      params: {
        video_id: id,
      },
    });
    setVideo(data);
  };
  useEffect(() => {
    getVideo();
    setIsSidebarOpen(false)
  }, []);

  return (
    <>
      <Helmet>
        <title>{`YouTube | ${video?.title || ""}`}</title>
      </Helmet>
      <div className="vidio">
        <div className="youtube">
          <YouTube videoId={id} id="you" />
          <VideoItem key={uuidv4()} {...video} />
        </div>
      </div>
    </>
  );
};

export default Vidio;
