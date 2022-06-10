import React from "react";
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

const CoursesList: React.FC = () => {
  const { loading, error, data } = useQuery(GET_LIST);
  const {isLoggedIn } = useGlobalContext()
  if(data)console.log(data.Learn.LearnOpportunities.edges)
  return (
    <div>
      {isLoggedIn &&
      <div className="container">
      <h2 className="coursesTitle">Kurse</h2>
      {loading && <Loading />}
      {error !== undefined && <p>{error.message}</p>}
     {data.Learn.LearnOpportunities !== undefined &&
        data.Learn.LearnOpportunities.edges.map((course: Course) => {
          return (
            <div key={course.node.title}>
              <img  alt="icon" src={course.node.icon.url} />
              <p>{course.node.title}</p>
            </div>
          );
        })}  
    </div>
}
    </div>
  );
};
export default CoursesList;
