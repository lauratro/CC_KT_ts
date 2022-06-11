import React from "react";
import { useQuery } from "@apollo/client";
import { GET_LIST } from "./../../Graphql/Query";
import Loading from "./../Loading/Loading";
import {useGlobalContext} from "../../context/VariableContext"
import SearchBar from "../SearchBar/SearchBar";
import "./CoursesList.css"
interface Course {
node:{
  icon: { url: string };
  title: "string";
}
}



const CoursesList: React.FC = () => {
  const {searchedText } = useGlobalContext()

  const { loading, error, data } = useQuery(GET_LIST,{variables: {first:20, query:searchedText }});




  return (
    <div>
     
      <div className="container">
      <h2 className="coursesTitle">Kurse</h2>
      <SearchBar/>
      {loading && <Loading />}
      {error !== undefined && <p>{error.message}</p>}
      <div className="coursesContainer">
            {data !== undefined &&
        data.Learn.LearnOpportunities.edges.map((course: Course) => {
          return (
            <div className="singleCourseContainer" key={course.node.title}>
              <img style={{width:50, height:50}}  alt="icon" src={course.node.icon.url} />
              <p>{course.node.title}</p>
            </div>
          );
        })}   
        </div>
    </div>

    </div>
  );
};
export default CoursesList;
