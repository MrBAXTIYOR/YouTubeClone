
import "./Card.scss";

const Card = ({ title, author, thumbnails, number_of_views, published_time, video_length }) => {
  return (
    <div className="card_wrapper">
      <img src={thumbnails.at(0).url} alt="" />
      <p className="card_viewer">{video_length}</p>
      <div className="card_item">
        <h3>{title}</h3>
        <h4>{author}</h4>
        <div className="card_item_view">
          <p>{number_of_views} views</p>
          <p>{published_time}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
