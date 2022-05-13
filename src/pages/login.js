import { Link } from "react-router-dom";
import { useState } from "react";
// import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/login.css";
// const BASE_URL = "http://13.235.87.215:4000";
// /api/v1/user/login

function Login() {
  // const [message, setMessage] = useState("");
  const [isLogin, setIslogin] = useState(true);
  function toggle() {
    setIslogin(!isLogin);
  }

  // function loginFn() {
  //   const username = document.getElementById("loginUsername");
  //   const password = document.getElementById("loginPassword");
  //   setMessage("");
  //   const data = {
  //     username: username.value,
  //     password: password.value,
  //   };

  //   axios
  //     .post(BASE_URL + "/api/v1/user/login", data)
  //     .then(function (response) {
  //       if (response.status === 200) {
  //         localStorage.setItem("username", response.data.username);
  //         localStorage.setItem("userId", response.data.id);
  //         localStorage.setItem("token", response.data.accessToken);
  //       } else {
  //         setMessage("invalid username or password");
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log(error.response.data.msg)
  //       setMessage(error.response.data.msg);
  //     });
  // }

  return (
    <div className="container loginMargin">
      <div className="card cardWidth">
        <div className="">Welcome to Ecommerce</div>
        {isLogin ? (
          <div>
            <div>Login</div>
            <div className="">
              <div>
                <label className="m-1">username :</label>
                <input type="text" id="loginUsername" />
              </div>
              <div>
                <label className="m-1">password :</label>
                <input type="password" id="loginPassword" />
              </div>
            </div>
            {/* <button className="btn btn-sm btn-primary" onClick={loginFn}>
            Login
          </button> */}
            <div>
              <Link to="/home" className="btn btn-sm btn-primary">
                Login
              </Link>
            </div>

            <button onClick={toggle} className="btn btn-sm btn-warning">
              create account ?
            </button>
            {/* <div className="text-danger text-center">{message}</div> */}
          </div>
        ) : (
          <div>
            <div>Sign in </div>
            <div className="">
              <div>
                <label className="m-1">username :</label>
                <input type="text" id="loginUsername" />
              </div>
              <div>
                <label className="m-1">password :</label>
                <input type="password" id="loginPassword" />
              </div>
              <div>
                <label className="m-1 ">Email :</label>
                <input type="email" id="email" className="email" />
              </div>
              {/* <button className="btn btn-sm btn-primary" onClick={}> */}

              <button className="btn btn-sm btn-primary" onClick={toggle}>
                Aleady have an account ?
              </button>
              {/* <div className="text-danger text-center">{message}</div> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
