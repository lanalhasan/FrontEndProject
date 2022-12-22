import { useContext } from "react"
import { AuthContext } from "../../Contexts/AuthContext"
import { useEffect, useState } from "react"
import SingleComment from "./SingleComment"
import CreateComment from "./CreateComment"

const AllComments = ({postId, data , post ,allposts}) => {
    const {token} = useContext(AuthContext)
    const [comments, setComments] = useState ([]) //saved all comments in this state
    const getAllComments = async () => {
        const res = await fetch(process.env.REACT_APP_API +`/posts/${postId}`,{
            method: "get",
            headers: {
              "Content-Type": "application/json",
              Authorization : `Bearer ${token}`
            }
          })
          const json = await res.json();
          setComments(json.data.comments)
    } 
    useEffect(()=>{
        getAllComments()
    },[])

    return(
        <div id='AllComments'>
            {comments?.length > 0 && (
                <ul>
                    {comments?.map((comment ,i) => (
                        <SingleComment key={i} comments={comment} />
                    ))}
                </ul>
            )}
            <CreateComment allposts={allposts} post={post} postId = {postId} comments = {comments} setComments= {setComments} dataa={data}/>
        </div>
    )
}
export default AllComments