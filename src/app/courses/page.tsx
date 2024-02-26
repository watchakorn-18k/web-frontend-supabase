"use client";

import "../globals.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../_components/card";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL + "/api";
const Course = () => {
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
      <div className="p-6 flex flex-col items-center justify-center gap-6">
        <h1 className="text-3xl">Course</h1>
        <div className="flex flex-wrap gap-4 w-full justify-center">
          {courseData.map((course: any) => (
            <a key={course.id} href={`/courses/${course.id}`}>
              <Card
                title={
                  course.name
                    ? `${course.id}. ${course.name}`
                    : `${course.id}. no name`
                }
                description={course.details ? course.details : "no description"}
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
