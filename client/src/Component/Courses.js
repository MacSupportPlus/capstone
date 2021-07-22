import React, {useEffect,useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import CourseItems from './CourseItems';
import {addToCart} from '../actions/courseActions'
import {getUdemyVideos} from '../actions/courseActions'

export const Courses = () =>{
        const dispatch = useDispatch();
        const token = useSelector(state => state.auth.auth);
        const courseItems = useSelector(state => state.course.cart);
        const coursesData = useSelector(state => state.course.udemyCourses);
        useEffect(() => {
            dispatch(getUdemyVideos());
        }, [])

        const handleAddCart = (index) => {
          const courseData = coursesData[index];
          dispatch(addToCart(courseData, token));
        }
        
    
        return(
            <>
            <h1>Course Page</h1>
            <div className="row" style={{fontSize:"15px"}}>
                <div className="d-flex col-8 column-flex flex-wrap p-4">
                    {coursesData.map((course,index) => (
                        <div  className="col-3 p-3">
                            <a href={`https://udemy.com/${course.url}`} target="_blank">
                            <img src={course.image_240x135} style={{width:"400px"}} alt=""></img>
                            </a>
                            <div className="col-10" style={{textAlign:"center"}}>
                                <p>{course.title} <br /> {course.price} <br /></p>
                                <button 
                                    className="btn btn-warning"
                                    onClick={()=>handleAddCart(index)}>Add To Cart
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