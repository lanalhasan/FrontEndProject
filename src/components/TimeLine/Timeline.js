import './Timeline.css'
const TimeLine = () => {
    return (
        <div className='content d-block'>
               <div  className='fixed-nav  w-100 navbar sticky-top bg-light'><h4 className='m-0 pt-1 px-3'>Home</h4></div>
            
               <div className='box d-flex pt-4 pb-2 px-2'>
                <img className='pic align-middle me-3 rounded-circle' src='https://www.gravatar.com/avatar/1683ce7f573f1af1584ea5b33bbf0e19?s=200'/>
               <div className='text-area d-flex flex-column align-items-end w-100'>
                <textarea className='txt w-100' placeholder='What is happening?'></textarea>
                <button className='create btn btn-primary'>Create Post</button>
               </div>
               </div>
        </div>
    )
}
export default TimeLine