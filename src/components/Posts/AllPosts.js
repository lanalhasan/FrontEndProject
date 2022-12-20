import { useContext, useState } from "react"
import { AuthContext } from "../../Contexts/AuthContext"
import CreatePost from "./CreatePost"
import { useEffect } from "react"

const AllPosts = ({ allPosts, changePosts}) => {
    const {token} = useContext(AuthContext)
    const [pending , setPending] = useState(false)
    
    const [page, setPage] = useState(1)
       const getAllPosts = async () => {
        setPending(true)
        const res = await fetch(process.env.REACT_APP_API +`/posts?page=${page}`,{
            method: "get",
            headers: {
             "Content-Type": "application/json",
              Authorization : `Bearer ${token}`
            }
          })
          const json = await res.json();
          setPending(false)
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
                        <CreatePost key={i} data={post} posts={allPosts} setData={changePosts}/>
                    ))}
                </ul>
            )}
            
            <input className="ms-4 mb-3 mt-1 btn btn-primary" type={'button'}  disabled={pending} value={'load more...'} onClick={() =>setPage(page + 1) }/>
            
        </div>
    )
}
export default AllPosts