import React,{useState} from "react";
import { useQuery } from "@apollo/client";
import {GET_LIST} from "./../../Graphql/Query"

interface Course{
    icon:{url:string};
    title:"string"
}

const CoursesList:React.FC = ()=> {
    const[courses, setCourses]=useState<Course[]>([])
  
    const { loading, error, data } = useQuery(GET_LIST,{variables:{tags:localStorage.getItem("userId")}});
  
   

    return <div> 
        <h2>Kursen</h2>
        {loading && <p>loading</p>}
    {error !== undefined && <p>{error.message}</p>}
    {data !== undefined &&
      courses.map(course => {
        return (
       <div>
         <img alt="icon" src={course.icon.url} />
         <p>{course.title}</p>
       </div>
        );
      })}</div>;
}
export default CoursesList