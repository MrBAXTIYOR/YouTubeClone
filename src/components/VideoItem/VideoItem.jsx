import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import customAxios from "../../service/axios";

import VidioItemCommet from "../VidioItemCommet/VidioItemCommet";
import Vidioitemcard from "../Vidioitemcard/Vidioitemcard";

import "./VideoItem.scss";

const VidioItem = (props) => {
  const [comments, setComments] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [video, setVideo] = useState([]);
  const getComments = async () => {
    try {
      const { data } = await customAxios.get("/video/comments", {
        params: {
          video_id: props.video_id,
        },
      });
      setComments([data]);
      console.log(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };
  const getTrendingVideos = async () => {
    try {
      const { data } = await customAxios.get("/trending/");
      setVideo(data.videos);
    } catch (error) {
      console.error("Error fetching trending videos:", error);
    }
  };

  useEffect(() => {
    setTimeout(getComments, 3000);
    setTimeout(getTrendingVideos, 5000);
  }, []);

  return (
    <>
      <div className="vidioitem_wrapper">
        <h2>{props?.title}</h2>
        <div className="vidioitem_base">
          <div className="vidioitem_base_view">
            <p>{props?.number_of_views} views.</p>
            <p> Oct 8, 2021</p>
          </div>
          <div className="vidioitem_like"></div>
        </div>
      </div>
      <div className="vidioitem_info">
        <div className="vidioitem_info_item-1">
          <div className="vidioitem_info_item-1_info">
            <img src={props?.thumbnails?.[0]?.url || ""} alt="" />
            <Link to={`/channel/${props?.channel_id}`}>
              <div className="vidioitem_info_item-1_info-user">
                <h3>{props?.author}</h3>
                <p>1.2M subscribers</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="vidioitem_info_item-2">
          {props?.description?.split("\n")?.map((line, index) => (showAll || index < 3) && <p key={uuidv4()}>{line}</p>)}
          {!showAll && (
            <p onClick={() => setShowAll(true)} className="cc">
              Show more
            </p>
          )}
        </div>
      </div>
      {comments && comments.map((comment) => <VidioItemCommet key={uuidv4()} {...comment} />)}

      <div className="trending-videos">
        {video.map((vid) => (
          <Link to={`/videos/${vid.video_id}`} key={uuidv4()}>
            <Vidioitemcard {...vid} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default VidioItem;
