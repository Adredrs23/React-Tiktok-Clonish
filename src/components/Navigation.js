import React ,{ useState } from 'react'
import { Link } from "react-router-dom";
import './componentSpecificcss/Navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faCamera, faInbox ,faUser} from '@fortawesome/free-solid-svg-icons';
// import { faUser } from '@fortawesome/free-regular-svg-icons';
// import {CSSTransition,TransitionGroup} from "react-transition-group"

const Navigation = ({setLoading})=>{
    const [active,setActive] = useState(0);

    const fontIconArray = [faHome, faSearch, faCamera, faInbox ,faUser];
    const links = ["/","/search","/create","/inbox","/profile"]

    const navItemArray = fontIconArray.map((icon,index)=>{
        return(
            // faHome==icon ? 
            // <div 
            //     className="navitem-container active" 
            //     key={index}  
            //     onClick={()=>{setActive(index)}}
            // >
            //     <FontAwesomeIcon 
            //         icon={icon} 
            //         className="fa-2x"
            //     />
            // </div>
            // :

            <div 
                className="navitem-container" 
                key={index}  
                onClick={()=>setLoading(true)}
            >
                <Link to = {links[index]}>
                    <FontAwesomeIcon 
                        icon={icon} 
                        className="fa-2x"
                    />
                </Link>
            </div>
        ) 
    })

    return(
        <div className = "nav-container">
            {navItemArray}
            <div className="active start"></div>
        </div>
    );
}


export default Navigation;

// {
//     <Navitem iconToDisplay = {faHome} />
//     <Navitem iconToDisplay = {faSearch} />
//     <Navitem iconToDisplay = {faCamera} />
//     <Navitem iconToDisplay = {faInbox} />
//     <Navitem iconToDisplay = {faUser} /> 
// }

// const Navitem = ({iconToDisplay})=>{
//     return(
//         <div className="navitem-container">
//             <FontAwesomeIcon icon={iconToDisplay} className="fa-2x"></FontAwesomeIcon>
//         </div>
//     );
// }