import dayjs from "dayjs"
import { useContext, useState } from "react"
import UserManager from "../../Contexts/AuthContext"
import relativeTime from 'dayjs/plugin/relativeTime'
import {BiComment} from 'react-icons/bi'
import AllComments from "../Comment/Comments"
import { Link } from "react-router-dom"

const Post = ({data}) => {
//  const handleClick = useContext (UserManager)
 const [showComment, setShowComment] = useState (false)

 const calcTime = (date) => {
    dayjs.extend (relativeTime)
    return dayjs(date).fromNow()
 }
    return(
        <>
    <div id='PostItem'>
        <img src={data?.avatar }id ='userImg'/>
        <div id='userName'>{data?.content}</div>
        <div id='sinceWhen'>{calcTime(data?.created_at)}</div>
        {/* <div id='content'>{data.content}</div> */}
    </div>

        <div>
            <Link id='typeComment' onClick={()=>{setShowComment(!showComment)}}>
            <BiComment></BiComment>
        </Link>
        {showComment && <div>
            <AllComments postId={data.id}/>
            </div>}
        </div>
    </>
    )
}
export default Post