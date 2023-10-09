import axios from "axios";
import { useState } from "react";
import "./Login.css";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  return (
    <section className="h-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img
                        src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29va2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
                        alt=""
                      />
                      <h4 className="mt-1 mb-5 pb-1">This Is A Cookbook App</h4>
                    </div>

                    <form>
                      <p>Please login to your account</p>

                      <div className="form-floating mb-4">
                        <input type="text" id="name" className="form-control" placeholder="Name" name="name" />
                        <label className="form-label" htmlFor="name">
                          Name
                        </label>
                      </div>

                      <div className="form-floating mb-4">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email address"
                          name="email"
                        />
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                      </div>

                      <div className="form-floating mb-4">
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          name="password"
                          placeholder="Password"
                        />
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Sign up</p>
                        <button type="button" className="btn btn-outline-primary">
                          Create new
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">This is a really cool cookbook!</h4>
                    <p className="small mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </p>
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
