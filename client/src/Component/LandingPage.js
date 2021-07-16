import React from 'react';
import {CoursesSlider} from './CoursesSlider'
import '../index.css';

export const LandingPage = () => {
    return(
        <>
        <div className="mainHolder">
            <h1><img src="../images/logo2.jpg"></img></h1>
            <div className="videoHolder">
                <div>
                    this is one video
                </div>
                <div>
                    this is another video
                </div>
                <div>
                    finally a third video WAAAAAAA
                </div>
            </div>
                <div>
                    <CoursesSlider />
                </div>
        </div>
        </>
    )
};