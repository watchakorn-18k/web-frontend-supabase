"use client";

import { IconMenu2 } from "@tabler/icons-react";
import "../globals.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL + "/api";
  const [courseData, setCourseData] = useState([]);
  const GetAllCourse = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/course`);
      setCourseData(response.data.data);
      console.log("response", response.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    GetAllCourse();
  }, []);
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <button
            className="btn btn-square btn-ghost lg:hidden"
            onClick={() => {
              document.getElementById("my-drawer-2")?.click();
            }}
          >
            <IconMenu2 />
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl" href="/">
            Course
          </a>
        </div>
      </div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center"></div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li className="menu-title">
              <p>Course</p>
            </li>
            {courseData.map((course: any) => (
              <li key={course.id}>
                <a href={`/courses/${course.id}`}>
                  {course.id}. {course.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {children}
    </>
  );
}
