import { createContext, useState } from "react";

export const PostCtx = createContext()

const PostManager = ({children}) => {
    const [postCon, setPostCon] = useState
    const addpost = (newpost) => {
        console.log(newpost)
        setPostCon ([...postCon,newpost])
    }
    return (
        <PostCtx.Provider value={{
            postCon,
            setPostCon,
            addpost
        }}>
            {children}
        </PostCtx.Provider>
    )
}
export default PostManager