import React from "react";
import { useQuery } from "@apollo/client";
import { GET_LIST } from "./../../Graphql/Query";
import Loading from "./../Loading/Loading";

interface Course {
  icon: { url: string };
  title: "string";
}

const CoursesList: React.FC = () => {
  const { loading, error, data } = useQuery(GET_LIST);

  return (
    <div>
      <h2>Kursen</h2>
      {loading && <Loading />}
      {error !== undefined && <p>{error.message}</p>}
      {data !== undefined &&
        data.map((course: Course) => {
          return (
            <div>
              <img alt="icon" src={course.icon.url} />
              <p>{course.title}</p>
            </div>
          );
        })}
    </div>
  );
};
export default CoursesList;
