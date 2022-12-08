import { NavLink } from "react-router-dom";
import "./Navbar.css";
import {IoMdHome } from "react-icons/io";
import {MdLocalPostOffice, MdExplore, MdViewList, MdLock, MdBookmarks} from 'react-icons/md'
import {HiUser} from 'react-icons/hi'


const Navbar = () => {
  return (
    <div className="ms-5 ">
      <img className="img "src="https://ferasjobeir.com/frontend-app/static/media/logo.1bb8db420e540d66b7c4a6a8350ca833.svg"alt=""/>
      <div className="d-flex flex-column m-4 p-1">
        <NavLink className=" contents" to={`/`}><IoMdHome className="fs-4" /><span>Home</span></NavLink>
        <NavLink className=" contents"><MdLocalPostOffice className="fs-4"/><span>Messages</span></NavLink>
        <NavLink className=" contents"><MdBookmarks className="fs-4"/><span>Bookmarks</span></NavLink>
        <NavLink className=" contents"><MdExplore className="fs-4"/><span>Explore</span></NavLink>
        <NavLink className=" contents"><MdViewList className="fs-4"/><span>Lists</span></NavLink>
        <NavLink className=" contents"><HiUser className="fs-4"/><span>Profile</span></NavLink>
        <NavLink className=" contents" to={"/signin"}><MdLock className="fs-4"/><span>Sign Out</span></NavLink>
      </div>
    </div>
  );
};
export default Navbar;
