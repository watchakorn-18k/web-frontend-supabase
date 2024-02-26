"use client";
import { useState } from "react";
import "../globals.css";
import axios from "axios";
import { setCookie } from "cookies-next";
const Login = () => {
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async (e: any) => {
    console.log(dataLogin);
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/signin`,
        dataLogin
      );
      if (response.data.data.message === "Invalid login credentials") {
        alert("Invalid login credentials");
      } else if (response.data.data.status != 400) {
        setCookie("access_token", response.data.data.session.access_token, {
          maxAge: response.data.data.session.expires_at,
        });
        window.location.href = "/profile";
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  onChange={(e) => {
                    setDataLogin({
                      ...dataLogin,
                      email: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  onChange={(e) => {
                    setDataLogin({
                      ...dataLogin,
                      password: e.target.value,
                    });
                  }}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
