import React from 'react';
import YoutubeBackground from 'react-youtube-background';
import '../index.css';


export const LandingPage = () => {
    return(
        <>
            <YoutubeBackground className="video"
                videoId={'jycn4RqY_3U'}>
                        <h1>Welcome</h1>
            </YoutubeBackground>
            <img src="../images/banner.jpg"></img>
            <div>this is where content will go</div>
        </>
    )
};