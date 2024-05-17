import "./Vidioitemcard.scss";

const Vidioitemcard = ({ title, author, thumbnails, number_of_views, published_time, video_length }) => {
  return (
    <div className="cart_wrapper">
      <img src={thumbnails.at(0).url} alt="" />
      <p className="cart_viewer">{video_length}</p>
      <div className="cart_item">
        <h3>{title}</h3>
        <h4>{author}</h4>
        <div className="cart_item_view">
          <p>{number_of_views} views</p>
          <p>{published_time}</p>
        </div>
      </div>
    </div>
  );
};

export default Vidioitemcard;
