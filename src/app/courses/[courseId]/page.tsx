interface CourseDetailParams {
  courseId: string;
}

const CourseDetail = ({ params }: { params: CourseDetailParams }) => {
  return (
    <>
      <h1>Course Detail {params.courseId}</h1>
    </>
  );
};

export default CourseDetail;
