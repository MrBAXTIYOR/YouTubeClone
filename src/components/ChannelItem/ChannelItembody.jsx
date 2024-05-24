import React from "react";
import { v4 as uuidv4 } from "uuid";

import ChannelItemVidio from "../ChannelItemVidio/ChannelItemVidio";

import "./ChannelItem.scss";

const ChannelItembody = ({ videos }) => {
  return <div className="chnenel">{videos && videos.map((video) => <ChannelItemVidio key={uuidv4()} {...video} />)}</div>;
};

export default ChannelItembody;
