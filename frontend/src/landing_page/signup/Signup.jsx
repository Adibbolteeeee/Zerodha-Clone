import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../util";
function Signup() {
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setFormInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let { username, email, password } = formInput;
    if (!username || !email || !password) {
      return handleError("All fields are mandatory!");
    }

    try {
      const URL = "https://zerodha-clone-backend-cyan.vercel.app/auth/signup";

      // 👇 Axios request with validateStatus so it never throws for non-2xx
      const response = await axios.post(
        URL,
        { email, username, password },
        {
          withCredentials:true,
          validateStatus: () => true, // always resolve, never throw
        }
      );

      const { data, status } = response;

      if (status === 201 && data.success) {
        // success
        handleSuccess(data.message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else if (status === 400) {
        // Joi validation error
        const details = data.error?.details?.[0]?.message;
        handleError(details || data.message || "Bad Request");
      } else if (status === 409) {
        handleError(data.message || "User already exists");
      } else if (status === 500) {
        handleError("Internal Server Error, please try again later");
      } else {
        handleError(data.message || "Something went wrong");
      }

      console.log("Response:", response);
    } catch (err) {
      // Only network errors come here
      handleError("Network error, please check your connection.");
      console.error(err);
    }
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-3 col-sm-2"></div>
        <div className="col-lg-6 col-sm-8 border shadow mb-5">
          <h1 className="text-center my-5">Signup</h1>

          <form onSubmit={handleOnSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={formInput.username}
                onChange={handleFormInput}
                required
                autoFocus
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formInput.email}
                onChange={handleFormInput}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formInput.password}
                onChange={handleFormInput}
                required
              />
            </div>

            <div className="d-flex" style={{ justifyContent: "center" }}>
              <button className="btn btn-primary my-3">Signup</button>
              <p style={{ margin: "0 1rem", placeSelf: "center" }}>
                Already have an account?{" "}
                <Link to={"/login"} style={{ textDecoration: "none" }}>
                  Login
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

export default Signup;
