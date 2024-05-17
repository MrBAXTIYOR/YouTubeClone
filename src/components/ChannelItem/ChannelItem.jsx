import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { useContext } from "../../context/Context";

import ChannelItembody from "./ChannelItembody";
import customAxios from "../../service/axios";

import "./ChannelItem.scss";

const ChannelItem = ({ avatar, banner, subscriber_count, title, channel_id }) => {
  const [channelvid, setChannelvid] = useState([]);
  const { rightbarOpen } = useContext();
console.log(rightbarOpen)
  const getChannelVidio = async () => {
    const { data } = await customAxios.get("/channel/videos", {
      params: {
        channel_id,
      },
    });
    setChannelvid([data]);
  };
  useEffect(() => {
    setTimeout(getChannelVidio, 2000);
  }, []);
  return (
    <div className={rightbarOpen ? "channelitem open" : "channelitem"}>
      <img src={banner[2].url} className="ww" alt="" />
      <div className="chennelitem_info">
        <img src={avatar[0].url} alt="" />
        <div className="chennelitem_info_item-1">
          <h1>{title}</h1>
          <p>{subscriber_count}</p>
        </div>
      </div>
      <div className="channel_info_item-2">
        <p>Home</p>
        <Link to={`/channel/${channel_id}/short`}>
          <p>Short</p>
        </Link>
      </div>
      <div className="channelvidio_wrapper">{channelvid && channelvid.map((vid) => <ChannelItembody key={uuidv4()} {...vid} />)}</div>
    </div>
  );
};

export default ChannelItem;
