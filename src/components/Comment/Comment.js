import dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime'

const SingleComment =({comments}) => {
const Time = (date) => {
    dayjs.extend (relativeTime)
    return dayjs(date).fromNow()
}
return (
    <>
    <div id='commentBox'>
    <img src={comments.user.avatar }id ='userImg'/>
        <div id='userName'>{comments.user.name}</div>
        <div id='sinceWhen'>{Time(comments.created_at)}</div>
        <div id='commentContent'>{comments.content}</div>
    </div>
    </>
)
}
export default SingleComment