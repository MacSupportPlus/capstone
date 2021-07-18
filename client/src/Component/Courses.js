import React, {useEffect,useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

export const Courses = () =>{
        const[coursesData,setCoursesData]= useState([])
        useEffect(() =>{
            axios.get("http://localhost:8800/api/udemyapi/courses")
            .then(res =>{setCoursesData(res.data.result.results)})
            
        },[])
        
        return(
            <>
            <h1>Course Page</h1>
            <div className="row" style={{fontSize:"15px"}}>
                <div className="d-flex col-12 column-flex flex-wrap p-4">
                    {coursesData && coursesData.map((course) => (
                        <div className="col-3 p-3">
                            <Link to={`udemy.com/${course.url}`}>
                            <img src={course.image_240x135} style={{width:"400px"}} alt=""></img>
                            </Link>
                            <div className="col-10" style={{textAlign:"center"}}>
                                <p>{course.title} <br /> {course.price} <br /></p>
                            </div>
                        </div>
                ))}
                </div>
            </div>
            </>
        )
};