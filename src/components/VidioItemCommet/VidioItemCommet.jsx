import avatar from "../../Assets/Avatar.png";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import "./VidioItemCommet.scss";
import { v4 as uuidv4 } from "uuid";
const VidioItemCommet = ({ number_of_comments, comments }) => {
  return (
    <div className="vidioitemcommet_wrapper">
      <h1>{number_of_comments} Comments</h1>

      <div className="vidioitem_commet">
        {comments.map((commet) => (
          <div className="vidioitem_commet_item" key={uuidv4}>
            <img src={commet.thumbnails[0].url} alt="" />
            <div className="vidioitem_commet_item_info">
              <div className="vidioitem_commet_item_info_header">
                <h3>{commet.author_name}</h3>
                <p>{commet.published_time}</p>
              </div>
              <p>{commet.text}</p>
              <div className="vidioitem_commet_item_info_footer">
                <div className="vidioitem_commet_item_info_footer_like">
                  <ThumbUpIcon className="icon" />
                  <p>{commet.like_count}</p>
                </div>
                <ThumbDownIcon className="icon" />
                <p>{commet.number_of_replies} reply</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VidioItemCommet;
