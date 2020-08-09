import React from "react"
import './componentSpecificcss/Actioncard.css'
import birdie from '../assets/birdie.mp4'
import footboys from '../assets/Footboys.mp4'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHeart as heart,faCommentDots as comment,faUserCircle as userCircle} from "@fortawesome/free-regular-svg-icons"
import {faHeart as solidheart,faShareAlt as share ,faCompactDisc as music} from "@fortawesome/free-solid-svg-icons"
import SkeletonCard from './SkeletonCard'

const Actioncard =({isLoading}) =>{
    return(
        <div className="card">
            { isLoading? <SkeletonCard />:<VideoHolder/> }
        </div>
    );
}


const VideoHolder = ()=>{
    return(
        <div className="video-container">
            {/* <video autoplay="true" loop="true"> */}
            <video>
                <source src={footboys} type="video/mp4"/>
                {/* <source src={birdie} type="video/mp4"/> */}
                    Error
            </video>
            <Overlay/>
        </div>
    );
}

const Overlay = ()=>{
    let isLiked = false;

    return(
        <div className="overlay" >

            <span id="avatar">
                    <FontAwesomeIcon icon={userCircle} className="fa-3x"></FontAwesomeIcon>
            </span>
            
            <span id="like">
                {
                    isLiked
                    ?<FontAwesomeIcon icon={solidheart} className="fa-3x"></FontAwesomeIcon>
                    :<FontAwesomeIcon icon={heart} className="fa-3x"></FontAwesomeIcon>
                }
            </span>
            
            <span id ="comment">
                <FontAwesomeIcon icon={comment} className="fa-3x"></FontAwesomeIcon>
            </span>
            
            <span id ="share">
                <FontAwesomeIcon icon={share} className="fa-3x"></FontAwesomeIcon>
            </span>
            
            <span id="id">Userid</span>

            <span id="description-box">
                <p id="description">Description This will be description about the video and 
                other related thoughts!!! #tags #tags #tags #tags #tags #tags#tags #tags #tags #tags
                #tags #tags #tags #tags</p>
            </span>

            <span id ="music">
                <FontAwesomeIcon icon={music} className="fa-4x"></FontAwesomeIcon>
            </span>

            <p><FontAwesomeIcon icon={music}></FontAwesomeIcon> Music used</p>
            
        </div>
    );
}

export default Actioncard;