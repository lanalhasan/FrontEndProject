import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "./Comment.css";


const SingleComment = ({ comments }) => {
  const Time = (date) => {
    dayjs.extend(relativeTime);
    return dayjs(date).fromNow();
  };
  return (
    <div className="completeComment d-flex mb-2">
      <div id="commentBox">
        <div className="commentBody">
          <div>
            <img
              className="CommentImg"
              src={comments.user.avatar}
              id="userImg"
            />
          </div>
          <div>
            <div className="CommentImg" id="userName">
              {comments.user.name}
            </div>
            <div className="mb-2" id="sinceWhen">
              {Time(comments.created_at)}
            </div>
        </div>
           
          </div>
          <div id="commentContent">{comments.content}</div>
      </div>
    </div>
  );
};
export default SingleComment;
