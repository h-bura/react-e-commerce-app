import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggeduser.email &&
      input.password === loggeduser.password
    ) {
      localStorage.setItem("loggedin", true);
      navigate("/");
      window.location.reload();
    } else {
      alert("Wrong Email or Password");
    }
  };

  return (
    <section
      style={{
        height: "90vh",
      }}
    >
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="/assets/images/login.webp"
              className="img-fluid"
              alt="loginImage"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleLogin}>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
                <input
                  name="email"
                  value={input.email}
                  onChange={(e) =>
                    setInput({
                      ...input,
                      [e.target.name]: e.target.value,
                    })
                  }
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                />
              </div>

              <div className="form-outline mb-3">
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
                <input
                  name="password"
                  value={input.password}
                  onChange={(e) =>
                    setInput({
                      ...input,
                      [e.target.name]: e.target.value,
                    })
                  }
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                />
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ paddingleft: "2.5rem", paddingright: "2.5rem" }}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?
                  <a href="/register" className="link-danger">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
