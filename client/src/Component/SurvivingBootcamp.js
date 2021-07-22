
import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { useDispatch, useSelector} from 'react-redux';
import {getVideos} from '../actions/courseActions'


export const SurvivingBootcamp = () => {
    const courses = useSelector(state => state.course.courses);
    const dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(getVideos());
    }, [])
            
    return(
        <>
            <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/kNvD6w5b32E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ld2zbIpAIJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div>
                  {courses.map(course => {
                      return course.userId
                  })}
             </div>
        </>

    )
    
};
