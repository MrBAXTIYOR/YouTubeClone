import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import customAxios from "./../service/axios";
import YouTube from "react-youtube";
import "./css/main.css";
import VidioItem from "../components/VidioItem/VidioItem";
import Header from "./../components/Header/Header";
import { v4 as uuidv4 } from "uuid";
const Vidio = () => {
  const [videoId, setVideoId] = useState();
  const [vidata, setVidata] = useState([]);
  const { id } = useParams() || "";
  const getVideo = async () => {
    const { data } = await customAxios.get("/video/details", {
      params: {
        video_id: id,
      },
    });
    setVideoId(data.video_id);
    setVidata([data]);
  };
  useEffect(() => {
    getVideo();
  }, []);

  return (
    <div className="vidio">
      <div className="youtube">
        {videoId && <YouTube videoId={videoId} />}
        {vidata && vidata.map((v) => <VidioItem key={uuidv4()} {...v} />)}
      </div>
    </div>
  );
};

export default Vidio;
