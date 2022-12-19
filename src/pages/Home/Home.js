import Navbar from '../../components/NavBar/Navbar'
import TimeLine from '../../components/TimeLine/Timeline'
import React from 'react'

const Home = () => {
    const [getPosts, setGetPosts] = React.useState ([])
    return (
    <>
    <div className='d-flex'>    
    <Navbar />
   <TimeLine posts={getPosts} setPosts={setGetPosts}/>
    </div>

        
    </>)
}
export default Home