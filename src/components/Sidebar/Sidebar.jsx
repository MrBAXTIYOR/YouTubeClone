import cx from "classnames";
import React, { useEffect } from "react";

import HomeIcon from "@mui/icons-material/Home";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ExploreIcon from "@mui/icons-material/Explore";
import HistoryIcon from "@mui/icons-material/History";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";

import { useContext } from "../../context/Context";

import "./Sidebar.scss";

export default function Sidebar() {
  const { isSidebarOpen,setRightbarOpen } = useContext();

  if(isSidebarOpen){
    setRightbarOpen(false)
  }
  else{
    setRightbarOpen(true)
  }
  return (
    <div className={cx("sidebar", { "sidebar--open": isSidebarOpen })}>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <HomeIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Home</span>
          </li>
          <li className="sidebarListItem">
            <ExploreIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Explore</span>
          </li>
          <li className="sidebarListItem">
            <SubscriptionsIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Subscriptions</span>
          </li>
          <hr className="sidebarHr" />
          <li className="sidebarListItem">
            <VideoLibraryIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Library</span>
          </li>
          <li className="sidebarListItem">
            <HistoryIcon className="sidebarIcon" />
            <span className="sidebarListItemText">History</span>
          </li>
          <li className="sidebarListItem">
            <OndemandVideoIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Your Videos</span>
          </li>
          <li className="sidebarListItem">
            <WatchLaterIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Watch Later</span>
          </li>
          <li className="sidebarListItem">
            <ThumbUpIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Liked Videos</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
      </div>
    </div>
  );
}
