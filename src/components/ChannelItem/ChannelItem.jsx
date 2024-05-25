import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";

import { useContext } from "../../context/Context";

import ChannelItembody from "./ChannelItembody";
import customAxios from "../../service/axios";

import "./ChannelItem.scss";

const ChannelItem = (props) => {
  const [channelvid, setChannelvid] = useState([]);
  const { rightbarOpen, isLoading, setIsLoading } = useContext();
  console.log(rightbarOpen);
  const getChannelVidio = async () => {
    setIsLoading(true)
    try {
      const { data } = await customAxios.get("/channel/videos", {
        params: {
          channel_id: props?.channel_id,
        },
      });
      setChannelvid([data]);
    } catch (error) {
      console.log(error);
    }
    finally{
      setIsLoading(false)
    }
  };
  useEffect(() => {
    setTimeout(getChannelVidio, 1000);
  }, []);
  return (
    <div className={rightbarOpen ? "channelitem open" : "channelitem"}>
      <img src={props?.banner?.at(0)?.url} className="ww" alt="" />
      <div className="chennelitem_info">
        <img src={props?.avatar?.at(0)?.url} alt="" />
        <div className="chennelitem_info_item-1">
          <h1>{props?.title}</h1>
          <p>{props?.subscriber_count}</p>
        </div>
      </div>
      <div className="channel_info_item-2">
        <p>Home</p>
      </div>
      <div className="channelvidio_wrapper">{channelvid && channelvid.map((vid) => <ChannelItembody key={uuidv4()} {...vid} />)}</div>
    </div>
  );
};

export default ChannelItem;
