import React from "react";
import courses from "../data/courses.json";
import '../App.css'
export default function CoursePage() {
  //var courseNo = props.course;
  const pathname = window.location.pathname
  const sub = pathname.substring(12)
  const courseNo = parseInt(sub)
  var course = courses.courseDetails[courseNo];

  return (
    <div className="coursePage">
             <strong className="card-text">{course.name}</strong>
            <p className="card-text">{course.university}</p>
        <div className='video'>
            <iframe width="560" height="315" src={course.video} 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
        </div>
      <div className="theory">
          <p className='card-text-2'>{course.theory}</p>
      </div> 
    </div>
  );
}
