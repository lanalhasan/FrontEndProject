import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "./SingleComment.css";


const SingleComment = ({ comments }) => {
  const Time = (date) => {
    dayjs.extend(relativeTime);
    return dayjs(date).fromNow();
  };
  return (
    <div className="completeComment d-flex  mt-4 ms-4 ">
      <div className="" id="commentBox">
        <div className="commentBody">
          <div>
            <img
              className="CommentImg"
              src={comments.user.avatar}
              id="userImg"
            />
          </div>
          <div>
            <div className="CommentName mb-0" id="userName">
              {comments.user.name}
            </div>
            <div className="CommentDate Smb-1 mt-0 fw-lighter" id="sinceWhen">
              {Time(comments.created_at)}
            </div>
        </div>
           
          </div>
        <div  className="ms-5 mt-1" id="commentContent">{comments.content}</div>
      </div>
    </div>
  );
};
export default SingleComment;
