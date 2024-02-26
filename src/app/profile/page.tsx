"use client";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import "../globals.css";
import ProfileComponent from "../_components/profile";
const Profile = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const handleLogin = () => {
    if (getCookie("access_token")) {
      setIsLogin(true);
      setIsLoading(false);
    } else {
      setIsLogin(false);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    handleLogin();
  }, [isLoading]);
  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <p>Loading...</p>
        </div>
      ) : isLogin ? (
        <ProfileComponent />
      ) : (
        <h1>Please Login</h1>
      )}
    </>
  );
};

export default Profile;
