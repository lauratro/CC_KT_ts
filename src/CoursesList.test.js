import TestRenderer from "react-test-renderer";
import { MockedProvider } from "@apollo/client/testing";


import React from "react";

import CoursesList from "./components/CoursesList/CoursesList";



it("renders without error", async () => {

  const component = TestRenderer.create(
    <MockedProvider mocks={[]} addTypename={false}>
      <CoursesList />
    </MockedProvider>
  );
  await new Promise((resolve) => setTimeout(resolve, 0));
  const p = await component.root.findByType("h2");
  expect(p.children.join("")).toContain("Kurse");
 
});
