"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = process.env.BASE_URL;
const Course = () => {
  const [courseData, setCourseData] = useState([]);

  const GetAllCourse = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/course`);
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
      <h1>Course</h1>
      {courseData.map((course: any) => (
        <div key={course.id}>
          <a href={`/courses/${course.id}`}>
            {course.name ? `${course.id}. ${course.name}` : "no name"}
          </a>
        </div>
      ))}
    </>
  );
};

export default Course;
