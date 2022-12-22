import { NavLink } from "react-router-dom";
import "./Navbar.css";
import {IoMdHome } from "react-icons/io";
import {MdLocalPostOffice, MdExplore, MdViewList, MdLock, MdBookmarks} from 'react-icons/md'
import {HiUser} from 'react-icons/hi'


const Navbar = () => {
  return (
    <div className="navs  ms-5" id="navs">
      <img className="navimg mb-0"src="https://ferasjobeir.com/frontend-app/static/media/logo.1bb8db420e540d66b7c4a6a8350ca833.svg"alt=""/>
      <div className=" d-flex flex-column m-3">
        <NavLink className={({isActive})=>(isActive)?"ActiveLink":" contents p-4 rounded-5 "} to={`/`}><IoMdHome className="fs-4" /><span className="ms-3">Home</span></NavLink>
        <NavLink className=" contents p-4 rounded-5 "><MdLocalPostOffice className="fs-4"/><span className="ms-3">Messages</span></NavLink>
        <NavLink className=" contents p-4 rounded-5 "><MdBookmarks className="fs-4"/><span className="ms-3">Bookmarks</span></NavLink>
        <NavLink className=" contents p-4 rounded-5 "><MdExplore className="fs-4"/><span className="ms-3">Explore</span></NavLink>
        <NavLink className=" contents p-4 rounded-5 "><MdViewList className="fs-4"/><span className="ms-3">Lists</span></NavLink>
        <NavLink className={({isActive})=>(isActive)?"ActiveLink":" contents p-4 rounded-5 "} to={'/profile'}><HiUser className="fs-4"/><span className="ms-3">Profile</span></NavLink>
        <NavLink className=" contents p-4 rounded-5 " to={"/signout"}><MdLock className="fs-4"/><span className="ms-3">Sign Out</span></NavLink>
      </div>
    </div>
  );
};
export default Navbar;