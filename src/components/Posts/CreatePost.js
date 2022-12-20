import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import UserManager, { AuthContext } from "../../Contexts/AuthContext";
import relativeTime from "dayjs/plugin/relativeTime";
import { BiComment } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import AllComments from "../Comment/AllComments";
import { Link } from "react-router-dom";
import "./CreatePost.css";

const CreatePost = ({ data , posts, setData}) => {
  const [showComment, setShowComment] = useState(false);
  const {token} =useContext(AuthContext)

  const calcTime = (date) => {
    dayjs.extend(relativeTime);
    return dayjs(date).fromNow();
  };
const LikePost = async  (post) => {
  const res =  await fetch(process.env.REACT_APP_API +`/posts/${
    post.liked_by_current_user ? "unlike" : "like"}`
    ,{
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization : `Bearer ${token}`
    },
    body: JSON.stringify({ post_id: post.id }),
  })
  const json = await res.json();
  if (json.success) {
    console.log(posts)
    const newPosts = [...posts]
    const index = newPosts.findIndex(item => item.id == json.data.id)
    newPosts[index] = json.data
    setData(newPosts)
  }
 
 
}
console.log(data)
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
          <div className="d-flex align-items-center ms-5 mt-3  fs-4" id="icons">
            <div
              className="theIcon me-2 rounded border bg-light py-0 px-2 d-flex align-items-center"
              id="likeIcon"
            >
              <div id="like" onClick={() => LikePost(data)}>
                <Link
                  id="pressLike"
                >
                  <MdFavoriteBorder fill={'black'}/>
                </Link>
              </div>
              <div className="ms-2 fw-bolder fs-6" id="count"> {data.likes_count}</div>
            </div>
            <div
              className="theIcon border rounded border bg-light PY-0 px-2 d-flex align-items-center"
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
              <div className=" ms-2 fw-bolder fs-6" id="count">{data.comments_count}</div>
            </div>
          </div>
        </div>
        <div>
        <div>
        {showComment && (
          <div>
            <AllComments postId={data.id} data ={data} />
          </div>
        )}
      </div>
          </div>
      </div>
     
    </>
  );
};
export default CreatePost;
