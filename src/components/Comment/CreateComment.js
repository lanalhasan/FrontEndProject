import { Button } from "bootstrap";
import { useRef, useState } from "react";
import { json } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import "./CreateComment.css";

const CreateComment = ({ postId ,comments ,setComments}) => {
  const { token } = useContext(AuthContext);
  const [comment, setComment] = useState("");

  const CreateTheComment = async (postId) => {
    const res = await fetch(process.env.REACT_APP_API + "/comments", {
      method: "Post",
      body: JSON.stringify({
        content: comment,
        post_id: postId,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        content: comment,
        post_id: postId,
      }),
    });
    const json = await res.json();
    window.alert(json.messages);
    if (json.success) {
      const newComment = json.data
      const newComments = [...comments,newComment ]
      setComments(newComments)
    }
    setComment("")
  };
  console.log(comment);
  return (
    <div className="container-fluid addcomment" id="newComm">
      <div className="" id="coment">
        <div className="d-flex ps-0 mb-0">
          <input
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            type="text"
            className="col form-control "
            placeholder="Add comment"
          />
          <div className="col-3 p-0">
            &nbsp; &nbsp;
            <button
              onClick={() => CreateTheComment(postId)}
              type="button"
              className="btn btn-primary w-75"
            >
              <small>Add</small>
            </button>
          </div>
        </div>
        &nbsp;
      </div>
    </div>
  );
};
export default CreateComment;
