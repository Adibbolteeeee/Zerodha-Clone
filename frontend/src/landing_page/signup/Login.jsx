import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../util";

function Login() {
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({ email: "", password: "" });

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setFormInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let { email, password } = formInput;
    try {
      const URL = "http://localhost:8080/auth/login";
      let response = await axios.post(
        URL,
        { email, password },
        { withCredentials: true, validateStatus: () => true }
      );
      console.log(response);

      let { data, status } = response;
      console.log(data);
      console.log(data);
      if (status === 400) {
        handleError(data.error?.details[0]?.message);
      } else if (status === 200) {
        handleSuccess(`Welcome back! ${data.username}`);
        setTimeout(()=>{window.location.href="http://localhost:5174/dashboard"},1500)
      } else if (status === 403) {
        handleError(data.message);
      } else if (status === 500) {
        handleError("Internal server error, Please try after some time.");
      }
    } catch (err) {
      // Only network errors come here
      handleError("Network error, please check your connection.");
      console.error(err);
    }
  };

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-lg-3 col-sm-2"></div>
        <div className="col-lg-6 col-sm-8 border shadow">
          <h1 className="text-center my-5">Login</h1>
          <form onSubmit={handleOnSubmit}>
            <div className="mb-4">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formInput.email}
                onChange={handleFormInput}
                autoFocus
              />
            </div>
            <div className="mb-4">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formInput.password}
                onChange={handleFormInput}
              />
            </div>
            <div className="d-flex" style={{ justifyContent: "center" }}>
              <button className="btn btn-primary my-3">Login</button>
              <p style={{ margin: "0 1rem", placeSelf: "center" }}>
                Don't have an account?{" "}
                <Link to={"/signup"} style={{ textDecoration: "none" }}>
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div className="col-lg-3 col-sm-2"></div>
      </div>
    </div>
  );
}

export default Login;
