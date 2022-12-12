import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const handleOnChange = (e) => {
    data[e.target.id] = e.target.value;
  };

  const createUser = async (data) => {
    const res = await fetch(process.env.REACT_APP_API + "/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    const json = await res.json();
    window.alert(json.messages)
    if (json.success)
    navigate('/signin')
    console.log(json);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createUser(data);
    
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div className="signup my-5 p-5">
              <img
                className="signupimg d-flex flex "
                src="https://ferasjobeir.com/frontend-app/static/media/logo.1bb8db420e540d66b7c4a6a8350ca833.svg"
                alt=""
              />
              <h1 className="createAcc mb-4">Create Account</h1>

              <label htmlFor="name" className="signUpForm mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                onChange={handleOnChange}
                className="form-control mb-3"
              />

              <label htmlFor="email" className="signUpForm mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                onChange={handleOnChange}
                className="form-control mb-3"
              />

              <label htmlFor="password" className="signUpForm mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={handleOnChange}
                className="form-control mb-3"
              />

              <label
                htmlFor="password_confirmation"
                className="signUpForm mb-2"
              >
                Password Confirmation
              </label>
              <input
                type="password"
                onChange={handleOnChange}
                id="password_confirmation"
                className="form-control mb-3"
              />

              <div className="d-flex justify-content-between mt-5 align-items-center">
                <button
                  type="button"
                  className="btn btn-link" onClick={()=> navigate('/signin')}
                >
                  Sign In
                </button>
                <input
                  type="submit"
                  value="Register"
                  className="btn btn-primary w-50 "
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
