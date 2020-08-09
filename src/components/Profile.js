import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser,  faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import "../components/componentSpecificcss/Profile.css"

const Profile = ()=>{
    return (
        <div className="profile-container">
            <div className="signin-card">
                <FontAwesomeIcon icon={faUser} className="fa-4x"></FontAwesomeIcon>
                <p>Join VideoShare to get personalized posts, share favourites, create and more.</p>
                <button>
                    Register
                    <FontAwesomeIcon icon={faSignInAlt}/>
                </button>
                <p>Free and Always will be.</p>
            </div>
        </div>
    );
}

export default Profile;