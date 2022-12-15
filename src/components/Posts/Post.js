import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import UserManager, { AuthContext } from "../../Contexts/AuthContext";
import relativeTime from "dayjs/plugin/relativeTime";
import { BiComment } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import AllComments from "../Comment/Comments";
import { Link } from "react-router-dom";
import "./Post.css";

const Post = ({ data }) => {
 // const handleClick = useContext (UserManager)
  const [showComment, setShowComment] = useState(false);
  const [showLike, setShowLike] = useState(false);
  const {token} =useContext(AuthContext)

  const calcTime = (date) => {
    dayjs.extend(relativeTime);
    return dayjs(date).fromNow();
  };
const LikePost = (postId) => {
  const res =  fetch(process.env.REACT_APP_API +`/posts/like${postId}`,{
    method: "post",
    body: JSON.stringify({postId}),
    headers: {
      "Content-Type": "application/json",
      Authorization : `Bearer ${token}`
    }
  })
 
}
  return (
    <>
      <div className="Alpost">
        <div id="PostDetails">
          <div className="postBody">
            <div>
              <img className="postImg " src={data?.user?.avatar} />
            </div>
            <div className="postthings ms-3">
              <div className="PostName" id="name">
                {data?.user?.name}
              </div>
              <div className="PostDate mb-2 fw-lighter" id="sinceWhen">
                {calcTime(data?.created_at)}
              </div>
            </div>
          </div>
          <p className="PostContent mt-2 ms-5 mb-3" id="comment">
              {data?.content}
            </p>
          <div className="d-flex align-items-center ms-5 mt-3 fs-5" id="icons">
            <div
              className="theIcon me-2 rounded border bg-light py-0 px-3 d-flex align-items-center"
              id="likeIcon"
            >
              <div id="like">
                <Link
                  id="pressLike"
                  onClick={()=>{
                    
                    (LikePost)}}
                >
                  <MdFavoriteBorder fill={'black'}/>
                </Link>
              </div>
              <div className="ms-2 fw-bolder" id="count"></div>
            </div>
            <div
              className="theIcon border rounded border bg-light py-0 px-3 d-flex align-items-center"
              id="commentIcon"
            >
              <div id="comment">
                <Link
                  id="typeComment"
                  onClick={() => {
                    setShowComment(!showComment);
                  }}
                >
                  <BiComment fill={'black'}/>
                </Link>
              </div>
              <div className="ms-2 fw-bolder" id="count"></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {showComment && (
          <div>
            <AllComments postId={data.id} />
          </div>
        )}
      </div>
    </>
  );
};
export default Post;
