import React,{useState} from "react";
import { useQuery } from "@apollo/client";
import {GET_LIST} from "./../../Graphql/Query"

interface Course{
    icon:{url:string};
    title:"string"
}

const CoursesList:React.FC = ()=> {
    const[courses, setCourses]=useState<Course[]>([])
    let token = localStorage.getItem("token");
    let id = localStorage.getItem("id");

    const { loading, error, data } = useQuery(GET_LIST);
  
   
    if (data) console.log(data);
    return <div> {loading && <p>loading</p>}
    {error !== undefined && <p>{error.message}</p>}
    {data !== undefined &&
      courses.map(course => {
        return (
       <div>
         <img src={course.icon.url} />
         <p>{course.title}</p>
       </div>
        );
      })}</div>;
}
export default CoursesList