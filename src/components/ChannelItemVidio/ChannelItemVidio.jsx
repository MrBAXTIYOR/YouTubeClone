import "./ChannelItemVidio.scss";
const ChannelItemVidio = ({ number_of_views, thumbnails, title, author, published_time, video_length }) => {
  return (
    <div>
      <div className="car_wrapper">
        <img src={thumbnails[1].url} alt="" />
        <p className="car_viewer">{video_length}</p>
        <div className="car_item">
          <h3>{title}</h3>
          <h4>{author}</h4>
          <div className="car_item_view">
            <p>{number_of_views} views</p>
            <p>{published_time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelItemVidio;
