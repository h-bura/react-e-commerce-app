import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const existingUserData = JSON.parse(localStorage.getItem("user")) || {};

  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    cartData: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUserData = {
      ...existingUserData,
      name: input.name,
      email: input.email,
      password: input.password,
      cartData: input.cartData,
    };
    localStorage.setItem("user", JSON.stringify(updatedUserData));

    navigate("/login");
  };

  return (
    <section
      style={{
        height: "90vh",
      }}
    >
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderradius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>

                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fa fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            name="name"
                            value={input.name}
                            onChange={(e) =>
                              setInput({
                                ...input,
                                [e.target.name]: e.target.value,
                              })
                            }
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fa fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
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
                            id="form3Example3c"
                            className="form-control"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fa fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
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
                            id="form3Example4c"
                            className="form-control"
                            placeholder="Password"
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fa fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4cd"
                            className="form-control"
                            placeholder="Repeat your password"
                          />
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3"
                        >
                          I agree all statements in
                          <a href="#!">Terms of service</a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="registerIcon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
