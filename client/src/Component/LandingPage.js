import React from 'react';
import YoutubeBackground from 'react-youtube-background';
import {CoursesSlider} from './CoursesSlider'
import '../index.css';


export const LandingPage = () => {
    return(
        <>
            <YoutubeBackground className="video"
                videoId={'jycn4RqY_3U'}>
                        <h1>Welcome</h1>
            </YoutubeBackground>
            <div className="">
            <img src="../images/banner.jpg"></img>
            <h2>Suggested Courses</h2>
            </div>
            <div style={{backgroundColor:"#d4e09b", height:300}}>
            <CoursesSlider />  
            </div>
        </>
    )
};