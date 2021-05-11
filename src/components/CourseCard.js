import React from "react";
import courses from "../data/courses.json";
import '../App.css'
export default function CourseCard(props) {
  var courseNo = props.course;
  var course = courses.courseDetails[courseNo];
  var linkToCoursePage = '/coursepage/' + courseNo;

  return (
    <a href={linkToCoursePage} className="card animate__animated animate__fadeIn">
      <img
        className="card-img"
        src={course.image}
        alt="Card image cap"
      ></img>
      <div className="card-body">
        <strong className="card-text">{course.name}</strong>
        <p className="card-text">{course.university}</p>
        <div className='flexbox'>
          <p className='card-text-2'>{course.length}</p>
          <p className='card-text'>{course.difficulty}</p>
        </div>
      </div>
    </a>
  );
}
