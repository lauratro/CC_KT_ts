import React, {useState, useEffect} from "react";
import { useQuery } from "@apollo/client";
import { GET_LIST } from "./../../Graphql/Query";
import Loading from "./../Loading/Loading";
import {useGlobalContext} from "../../context/VariableContext"
import "./CoursesList.css"
interface Course {
node:{
  icon: { url: string };
  title: "string";
}
}
interface CoursesList{
 edges:Course[]
}


const CoursesList: React.FC = () => {

const [searchedText,setSearchedText]= useState<string>("")
  const { loading, error, data } = useQuery(GET_LIST);
  const {isLoggedIn } = useGlobalContext()

 console.log(searchedText)
 const filtered:Course[] = searchedText ? data.Learn.LearnOpportunities.edges.filter((course:Course)=>{
 return course.node.title.toLowerCase().includes(searchedText.toLowerCase())
 }):data.Learn.LearnOpportunities.edges

  return (
    <div>
     
      <div className="container">
      <h2 className="coursesTitle">Kurse</h2>
      <input type="text" value={searchedText} onChange={(e)=>setSearchedText(e.target.value)}/>
      {loading && <Loading />}
      {error !== undefined && <p>{error.message}</p>}
            {data !== undefined &&
        filtered.map((course: Course) => {
          return (
            <div key={course.node.title}>
              <img  alt="icon" src={course.node.icon.url} />
              <p>{course.node.title}</p>
            </div>
          );
        })}   
    </div>

    </div>
  );
};
export default CoursesList;
