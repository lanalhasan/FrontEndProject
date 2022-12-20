import { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import "./Information.css";



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
    console.log(json.data)
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
      <div className="prof navbar sticky-top bg-light w-100">
        <h4 className="m-0 pt-1 px-3">Profile</h4>
      </div>
      <form  onSubmit={updateUserProfile}>
        <input type="hidden" value="put" name="_method" />
        <div className="p-3 mb-4 user">
          <div className="alert alert-info" role="alert">
            My Information
          </div>
          <div className="form-field mb-3 user-avatar">
            <label htmlFor="avatar" className="mx-auto my-2 d-block w-25">
            <input
              name="avatar"
              type="file"
              id="avatar"
              ref={fileRef}
              className="position-absolute"
              style={{display: "none"}}
            />
              <img
                src={userInfo.avatar}
                className="d-block mx-auto rounded-circle w-100"
                onClick={()=> fileRef.current.click()}
              />
            </label>
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
