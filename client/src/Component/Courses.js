import React, {useEffect,useState} from 'react';
import axios from 'axios';

export const Courses = () =>{
        const[coursesData,setCoursesData]= useState([])
        useEffect(() =>{
            axios.get("http://localhost:8800/api/udemyapi/courses")
            .then(res => setCoursesData(res.data.result.results))
        },[])
        

        return(
            <>
            <h1>Course Page</h1>
            {coursesData && coursesData.map((course) => (
            <div>
            <img src={course.image_240x135}></img>
            <p>{course.title} <br /> {course.price}
            </p>

            </div>
            ))}
            </>
        )

};