import { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import "./Information.css";
import Head from "../Head/Head";
import {AiOutlineCamera} from 'react-icons/ai'



const Information = () => {
  const [image, setImage] = useState('')
  const [userInfo, setUserInfo] = useState({});
  const [userPosts, setUserPosts] = useState([]);
  const { token, setUser , user } = useContext(AuthContext);
  const fileRef = useRef()

  const [formData , setFormData]  = useState({ 
    name:user.name,
    email:user.email,
    password:"",
    new_password:"",
    new_password_confirmation:""

  }) 
  const getUserInfo = async () => {
    const res = await fetch(process.env.REACT_APP_API + `/users/me`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await res.json();
    if (json.success) {
      setUserInfo(json.data);
      setUserPosts(json.data.posts);
    }
    console.log(userInfo);
  };

  const deleteUserPosts = async (id) => {
    const res = await fetch(process.env.REACT_APP_API + `/posts/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await res.json();
    if (json.success) {
        const newUserPosts = [...userPosts]
        const index = newUserPosts.findIndex(item => item.id == id)
        newUserPosts.splice(index,1)
        setUserPosts(newUserPosts)

    }
  };

  const updateUserProfile = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target)
    const newData = await fetch(process.env.REACT_APP_API + `/users/me`, {
      method: "post",
      body: form,
      headers: {
        Accept:"application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    const json = await newData.json();
    localStorage.setItem("the_user" , JSON.stringify(json.data) )
    if (json.success) {
      getUserInfo();
      alert(json.messages)
      setUser(json.data)    }
    console.log(userInfo);
      }


  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="info">
      <Head page_name ="Profile"/>
      <form  onSubmit={updateUserProfile}>
        <input type="hidden" value="put" name="_method" />
        <div className="p-3 mb-4 user">
          <div className="alert alert-info" role="alert">
            My Information
          </div>
          <div class="form-field mb-3 person-avatar">
            <label for="avatar" class="mx-auto my-2 d-block w-25">
              <img
                src={userInfo.avatar}
                className="d-block mx-auto rounded-circle w-100"
              />
              <div class="icon">
               <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="#FFF" d="M5 5h-3v-1h3v1zm8 5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm11-4v15h-24v-15h5.93c.669 0 1.293-.334 1.664-.891l1.406-2.109h8l1.406 2.109c.371.557.995.891 1.664.891h3.93zm-19 4c0-.552-.447-1-1-1-.553 0-1 .448-1 1s.447 1 1 1c.553 0 1-.448 1-1zm13 3c0-2.761-2.239-5-5-5s-5 2.239-5 5 2.239 5 5 5 5-2.239 5-5z"></path></svg>
              </div>
            </label>
            <input
              name="avatar"
              type="file"
              id="avatar"
              className="position-absolute"
            />
          </div>
          <div>
            <label htmlFor="name" className=" mb-2">
              Name<h6 className="star">*</h6>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control mb-3"
              value={formData.name}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  name: e.target.value,
                });
              }}
            />

            <label htmlFor="email" className="mb-2">
              Email Address<h6 className="star">*</h6>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control mb-3"
              value={formData.email}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  email: e.target.value,
                });
              }}
            />

            <label htmlFor="password" className="mb-2 ">
              Password<h6 className="star">*</h6>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control mb-3"
              value={formData.password}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  password: e.target.value,
                });
              }}
            />

            <label htmlFor="password" className="mb-2">
              New Password
            </label>
            <input
              type="password"
              name="new_password"
              className="form-control mb-3"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  new_password: e.target.value,
                });
              }}
            />

            <label htmlFor="password_confirmation" className="mb-2">
              New Password Confirmation
            </label>
            <input
            name="new_password_confirmation"
              type="password"
              id="password_confirmation"
              className="form-control mb-3"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  new_password_confirmation: e.target.value,
                });
              }}
              
            />

            <button type="submit" className="btn btn-primary mb-3 ">
              Update Profile
            </button>
          </div>
        </div>
      </form>
      <div className="mb-4 p-3">
        <div class="alert alert-info">My Posts</div>
        <ul className="list-group">
          {userPosts?.map((item, i) => (
            <li className="list-group-item d-flex align-items-center justify-content-between">
              <span>{item.content}</span>
              <span>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={()=> deleteUserPosts(item.id)}
                >
                  Delete
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Information;
