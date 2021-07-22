import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { useDispatch} from 'react-redux';
import ReactPlayer from 'react-player/file'


export const SurvivingBootcamp = () => {
    const dispatch = useDispatch();
        const[videoData,setVideoData]= useState([])
        useEffect(() =>{
            axios.get("http://localhost:8800/api/videos/videos")
            .then(res =>{
                console.log(res)
                setVideoData(res.data)
            
        })},[])
    return(
        <>
            <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/kNvD6w5b32E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ld2zbIpAIJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </>
    )
    
}
