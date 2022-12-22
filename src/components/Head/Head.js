import './Head.css';
import { Link } from 'react-router-dom'
import {IoMdHome} from 'react-icons/io'
import {HiUser} from 'react-icons/hi'
import {MdLock} from 'react-icons/md'
const Head = ({page_name}) =>{
    return(
        <div className='head'>
            <h4 className="m-0">{page_name}</h4>
            <div className="d-flex d-md-none">
                <div className='headIcon'>
                    <Link to="/"><IoMdHome className="fs-4" /></Link>
                </div>
                <div className='headIcon'>
                <Link to="/profile"><HiUser className="fs-4"/></Link>
                </div>
                <div className='headIcon'>
                    <Link to="/signout"><MdLock className="fs-4"/></Link>
                </div>
            </div>
        </div>
    )
}

export default Head
