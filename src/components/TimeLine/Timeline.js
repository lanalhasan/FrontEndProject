import { useContext, useEffect, useRef, useState } from "react";
import { HiHand } from "react-icons/hi";
import { AuthContext } from "../../Contexts/AuthContext";
import AllPosts from "../Posts/AllPosts";
import "./Timeline.css";

const TimeLine = ({ posts, setPosts }) => {
  const { token,user } = useContext(AuthContext);
  const postContentRef = useRef();  
  
  const CreatePost = async () => {
    const res = await fetch(process.env.REACT_APP_API + "/posts", {
      method: "Post",
      body: JSON.stringify({
        content: postContentRef.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
    });
    const json = await res.json();
    if(json.success){
      alert(json.messages)
    postContentRef.current.value = ""

      setPosts([json.data, ...posts])
    }
  };
  return (
    <div className="content d-block">
      <div className="fixed-nav  w-100 navbar sticky-top bg-light">
        <h4 className="m-0 pt-1 px-3">Home</h4>
      </div>

      <div className="box d-flex pt-2 pb-2 px-3">
        <img
          className="pic align-middle me-3 rounded-circle"
          src={user?.avatar}
        />
        <div className="text-area d-flex flex-column align-items-end w-100">
          <textarea
          ref={postContentRef}
            className="txt w-100"
            placeholder="What is happening?"
            name="content"
          
          ></textarea>
          <button 
          onClick={() => CreatePost()}
         className="create btn btn-primary" type="submit">
            Create Post
          </button>
        </div>
      </div>
      <AllPosts  allPosts={posts} changePosts={setPosts}/>

    </div>
  );
};
export default TimeLine;
