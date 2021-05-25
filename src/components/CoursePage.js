import React from "react";
import courses from "../data/courses.json";
import '../App.css'
import Navigation2 from "./Navbar2";
export default function CoursePage() {
  //var courseNo = props.course;
  const pathname = window.location.pathname
  const sub = pathname.substring(12)
  const courseNo = parseInt(sub)
  var course = courses.courseDetails[courseNo];

  return (
    <div className="coursePage animate__animated animate__fadeIn">
      <Navigation2 />
             <strong className="heading">{course.name}</strong>
            <p className='uni'>{course.university}</p>
            <div className='flexbox'>
                <div className='right'>
                    <div className='video'>
                        <iframe width="760" height="415" src={course.video} 
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
                        <br /><br />
                    </div>
                    <div className="theory">
                        <strong>Theory Notes:</strong> <br /><br />
                        <p className='card-text-3'>{course.theory}</p>
                        <embed type="text/html" src={course.embed} width="760" height="600"></embed>
                    </div> 
                </div>
                <div className='left'>
                  <strong style={{color:"rgb(108, 42, 139)"}}>COURSE OVERVIEW</strong> <br /> <br />
                   <strong>Course Name:</strong> <p className='card-text-2'>{course.name}</p>
                   <strong>Course Length:</strong> <p className='card-text-2'>{course.length}</p>
                   <strong>Topic:</strong> <p className='card-text-2'>{course.topic}</p>
                   <strong>Difficulty:</strong> <p className='card-text-2'>{course.difficulty}</p>
                </div>
            </div>
    </div>
  );
}
