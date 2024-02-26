"use client";

import axios from "axios";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

export default function ProfileComponent() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL + "/api/user";
  const [profileData, setProfileData] = useState({
    id: "",
    email: "",
    last_sign_in_at: "",
  });
  const GetProfile = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${getCookie("access_token")}`,
        },
      });
      console.log("response", response);

      setProfileData(response.data.user);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    GetProfile();
  }, []);
  return (
    <>
      <h1 className="text-2xl font-bold text-center m-10">Profile</h1>
      <div className="flex items-center justify-center gap-16 bg-base-200 rounded-lg w-3/4 mx-auto py-10">
        <div className="flex flex-col items-start justify-center gap-4">
          <h1 className="text-lg">id</h1>
          <h1 className="text-lg">email</h1>
          <h1 className="text-lg">last sign in at</h1>
        </div>
        <div className="flex flex-col items-start justify-center gap-4">
          <h1 className="text-lg">{profileData.id}</h1>
          <h1 className="text-lg">{profileData.email}</h1>
          <h1 className="text-lg">{profileData.last_sign_in_at}</h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center items-center">
          <a href="/courses" className="btn btn-primary m-10">
            Go To Courses
          </a>
        </div>
      </div>
    </>
  );
}
