import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

import customAxios from "../service/axios";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "./../components/Header/Header";
import ChannelItem from "./../components/ChannelItem/ChannelItem";

import "./css/main.css";
const Channel = () => {
  const { id } = useParams();

  const [channelData, setChannelData] = useState([]);

  const getChanneldata = async () => {
    const { data } = await customAxios.get("/channel/details", {
      params: {
        channel_id: id,
      },
    });
    setChannelData([data]);
  };

  useEffect(() => {
    getChanneldata();
  }, []);

  return (
    <div className="channel_wrapper">
      <div className="main_wrapper">{channelData && channelData.map((data) => <ChannelItem key={uuidv4()} {...data} />)}</div>
    </div>
  );
};

export default Channel;
