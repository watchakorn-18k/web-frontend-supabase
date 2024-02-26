"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface CourseDetailParams {
  courseId: string;
}

const CourseDetail = ({ params }: { params: CourseDetailParams }) => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL + "/api/course";
  const [courseData, setCourseData] = useState([]);
  const GetCourse = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/get-course/${params.courseId}`
      );
      setCourseData(response.data.data);
      console.log("response", response.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    GetCourse();
  }, []);
  return (
    <>
      {courseData.map((course: any) => (
        <div key={course.id}>
          <h1 className="text-xl font-bold text-center">{course.name}</h1>
          <p>ID: {course.uid}</p>
          <p>Details: {course.details}</p>
          <p>Price: {course.price}</p>
          <p>Created At: {course.created_at}</p>
        </div>
      ))}
    </>
  );
};

export default CourseDetail;
