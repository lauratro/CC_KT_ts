import React from 'react'
import "./SingleCourse.css"
interface Course {
   course:{  node:{
    icon: { url: string };
    title: "string";
  }}
  
    }
const SingleCourse: React.FC<Course> =({course})=> {
  return (
    <div>   <div className="singleCourseContainer" key={course.node.title}>
    <img style={{width:50, height:50}}  alt="icon" src={course.node.icon.url} />
    <p>{course.node.title}</p>
  </div></div>
  )
}
export default SingleCourse;