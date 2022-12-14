import { Button } from "bootstrap"
import { useRef } from "react"
import { json } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../Contexts/AuthContext"

const CreateComment = ({postId}) => {
    const {token} = useContext (AuthContext)
    const commentRef = useRef()
    
    const CreateTheComment = async (postId) => {
        const res = await fetch ('REACT_APP_API/comments', {
            method: 'Post',
            body: JSON.stringify({
                content:commentRef.current.value,
                post_Id : postId
            }),
            headers: {
                "Content-Type": "application/json",
              "Authorization" : `Bearer ${token}`
            }
        })
        const json = await res.json (
            window.alert(json.messages)
        )
    }
    return (
        <div id='newComm'>
            <div id='coment'>
                <div className='input-group mb-3'>
                    <input ref={commentRef} type='text' className="form-control"/>
                    <span className="input-group-text mb-3">
                        <button onClick={()=> CreateTheComment(postId)} type="button" className="btn btn-primary">Add Comment</button>
                    </span>
                </div>
                &nbsp;
            </div>
        </div>
    )
}
export default CreateComment