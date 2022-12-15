import { useContext, useState } from "react"
import { AuthContext } from "../../Contexts/AuthContext"
import CreatePost from "./CreatePost"
import { useEffect } from "react"
//import { PostCtx } from "../../Contexts/PostContext"

const AllPosts = ({ allPosts, changePosts}) => {
    const {token} = useContext(AuthContext)
    
    const [page, setPage] = useState(1)
       const getAllPosts = async () => {
        const res = await fetch(process.env.REACT_APP_API +`/posts?page=${page}`,{
            method: "get",
            headers: {
             "Content-Type": "application/json",
              Authorization : `Bearer ${token}`
            }
          })
          const json = await res.json();
          console.log(allPosts)
          if(json.success) changePosts([...allPosts, ...json.data.data])
    } 

    useEffect(()=>{
        getAllPosts()
    },[page])

    return(
        <div id='posts'>
            {allPosts?.length > 0 && (
                <ul style={{padding:'0px'}}>
                    {allPosts?.map((post ,i) => (
                        <CreatePost key={i} data={post}/>
                    ))}
                </ul>
            )}
            <input type={'button'} value={'load more...'} onClick={() =>setPage(page + 1) }/>
        </div>
    )
}
export default AllPosts