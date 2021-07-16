import React, {useState,useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export const CoursesSlider = () => {
        const[courses, setCoursesData] = useState([]);
        useEffect(() => {
            axios.get('http://localhost:8800/api/udemyapi/courses')
            .then(res =>{setCoursesData(res.data.result.results)})
        }, [])
    
    //What do you want to see on the page
    return (
        <>
        <div className="row" style={{fontSize:"15px"}}>
            {courses && courses.map((course)=>(
                <div className="col-1 p-1 m-7">
                    <img className="img-fluid" src={course.image_240x135}></img>
                </div>
            ))}
            </div>
        </>
    )
};