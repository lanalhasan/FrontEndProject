import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";

const SignIn = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleOnChange = (e) => {
    data[e.target.id] = e.target.value;
  };

  const enterUser = async (data) => {
    const res = await fetch(process.env.REACT_APP_API + "/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    window.alert(json.messages)
    if  (json.success){
        signIn(json.data, json.token);
        navigate('/')
    } 
    console.log(json);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await enterUser(data);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div className="signIn my-5 p-5">
              <img
                className="signinimg d-flex flex-column"
                src="https://ferasjobeir.com/frontend-app/static/media/logo.1bb8db420e540d66b7c4a6a8350ca833.svg"
                alt=""
              />
              <h1 className="account mb-3">Sign In</h1>

              <label htmlFor="email" className="signInForm mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                onChange={handleOnChange}
                className="form-control mb-3"
              />

              <label htmlFor="password" className="signInForm mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={handleOnChange}
                className="form-control mb-3"
              />

              <div className="d-flex justify-content-between mt-5 align-items-center">
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={()=> navigate('/signup')}
                >
                  Sign Up
                </button>
                <input
                  type="submit"
                  value="Sign In"
                  className="btn btn-primary w-50"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
