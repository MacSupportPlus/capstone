import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getVideos} from '../actions/courseActions'

export const SurvivingBootcamp = () => {
    const dispatch = useDispatch()
    const courses = useSelector(state => state.course.courses)

    useEffect(() => {
      
        dispatch(getVideos());
    
    }, [])
    console.log(courses)
    return(
       
        <div>
            {courses.map(course => {
                return course.userId
            })}
      
        </div>
    )
};
