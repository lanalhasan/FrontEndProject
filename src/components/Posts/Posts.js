import { useContext, useState } from "react"
import { AuthContext } from "../../Contexts/AuthContext"
import Post from "./Post"
import { useEffect } from "react"
import { PostCtx } from "../../Contexts/PostContext"

const AllPosts = () => {
    const {token} = useContext(AuthContext)
   // const {postCon, setPostCon, addpost} =useContext(PostCtx)
    const [getPosts, setGetPosts] = useState ([])
       const getAllPosts = async () => {
        const res = await fetch(process.env.REACT_APP_API +"/posts",{
            method: "get",
            headers: {
             "Content-Type": "application/json",
              Authorization : `Bearer ${token}`
            }
          })
          const json = await res.json();
          console.log(json)
          if(json.success) setGetPosts(json.data.data)
    } 
    useEffect(()=>{
        getAllPosts()
    },[])
 console.log(getPosts)
    return(
        <div id='posts'>
            {getPosts?.length > 0 && (
                <ul style={{padding:'0px'}}>
                    {getPosts?.map((post ,i) => (
                        <Post key={i} data={post}/>
                    ))}
                </ul>
            )}
        </div>
    )
}
export default AllPosts