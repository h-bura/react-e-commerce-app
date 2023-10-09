import React from "react";

function Profile() {
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : "";
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Profile Information</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md 5 d-flex justify-content-center">
            <img
              src="/assets/images/profil.png"
              alt="Contact Us"
              height="300px"
              width="300px"
            />
          </div>
          <div className="col-md-6 mt-3">
            <div className="mb-3">
              <h3 className="text-decoration-underline text-primary">
                Full Name
              </h3>

              <p className="border p-2">{user.name}</p>
            </div>
            <div className="mb-3">
              <h3 className="text-decoration-underline text-primary">
                Email Address
              </h3>

              <p className="border p-2">{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
