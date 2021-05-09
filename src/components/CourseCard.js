import React from "react";
import courses from "../data/courses.json";

export default function CourseCard(props) {
  var courseNo = props.course;
  var course = courses.courseDetails[courseNo];

  return (
    <div className="card">
      <img
        className="card-img-top"
        src={course.image}
        alt="Card image cap"
      ></img>
      <div className="card-body">
        <strong className="card-text">{course.name}</strong>
        <p className="card-text">{course.university}</p>
      </div>
    </div>
  );
}
