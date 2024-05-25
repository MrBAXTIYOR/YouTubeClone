import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

import customAxios from "../service/axios";
import ChannelItem from "./../components/ChannelItem/ChannelItem";

import "./css/main.css";

const Channel =  () => {
  const { id } = useParams();

  const [channelData, setChannelData] = useState({});

  const getChanneldata = async () => {
    const { data } = await customAxios.get("/channel/details", {
      params: {
        channel_id: id,
      },
    });
    setChannelData(data);
  };

  useEffect(() => {
    getChanneldata();
  }, []);

  console.log(channelData);

  return (
    <>
      <Helmet>
        <title>{`YouTube | ${channelData?.title}`}</title>
      </Helmet>
      <div className="channel_wrapper">
        <div className="main_wrapper">
          <ChannelItem key={uuidv4()} {...channelData} />)
        </div>
      </div>
    </>
  );
};

export default Channel;
