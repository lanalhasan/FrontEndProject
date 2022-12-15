import { Button } from "bootstrap"
import { useRef, useState } from "react"
import { json } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../Contexts/AuthContext"
import './CreateComment.css'

const CreateComment = ({postId}) => {
    const {token} = useContext (AuthContext)
    const commentRef = useRef()
    const [comment,setComment]=useState()

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
        const json = await res.json ()
            window.alert(json.messages)
            if(json.success){
                setComment([json.data, ...comment])
              }
              commentRef.current.value =''   
    }
    return (
        <div className="container-fluid addcomment" id='newComm'>
            <div className="" id='coment'>
                <div className='d-flex ps-0 mb-0'>
                    <input ref={commentRef} type='text' className="col form-control "placeholder="Add comment"/>
                    <div className="col-3 p-0">
                    &nbsp;
                    &nbsp;
                        <button onClick={()=> CreateTheComment(postId)} type="button" className="btn btn-primary w-75"><small>Add</small></button>
                </div>
                </div>
                &nbsp;
            </div>
        </div>
    )
}
export default CreateComment