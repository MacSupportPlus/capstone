import React, {useEffect,useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import CourseItems from './CourseItems';
import {addToCart} from '../actions/courseActions'

export const Courses = () =>{
        const dispatch = useDispatch();
        const[coursesData,setCoursesData]= useState([])
        useEffect(() =>{
            axios.get("http://localhost:8800/api/udemyapi/courses")
            .then(res =>{setCoursesData(res.data.result.results)})
            
        },[])
        
        return(
            <>
            <h1>Course Page</h1>
            <div className="row" style={{fontSize:"15px"}}>
                <div className="d-flex col-8 column-flex flex-wrap p-4">
                    {coursesData && coursesData.map((course) => (
                        <div className="col-3 p-3">
                            <Link to={`udemy.com/${course.url}`}>
                            <img src={course.image_240x135} style={{width:"400px"}} alt=""></img>
                            </Link>
                            <div className="col-10" style={{textAlign:"center"}}>
                                <p>{course.title} <br /> {course.price} <br /></p>
                                <button 
                                    className="btn btn-warning"
                                    onClick={()=> dispatch(addToCart(course))}>Add To Cart
                                    </button>
                            </div>
                        </div>
                ))}
                </div>
                <div className="col-4">
                        Course Items
                        <CourseItems />
                </div>
            </div>
            </>
        )
};