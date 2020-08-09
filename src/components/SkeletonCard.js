import React from "react";
import Skeleton,{SkeletonTheme} from "react-loading-skeleton";

const SkeletonCard = () => {
    return (
      <section>
        <SkeletonTheme color="coral" highlightColor="yellow" >
        
            <div className="video-container">
                <div className="overlay">
                    
                    <Skeleton width={80} height={30} style={{borderRadius:'.7em'}}/>
                    
                    <span id="description-box">
                        <Skeleton id="description"  width={250} height={130} style={{borderRadius:'.7em'}} />
                    </span>
                    <Skeleton width={150} height={20} style={{borderRadius:'.7em'}} />
                </div>
            </div>

        </SkeletonTheme>
      </section>
    );
  };

export default SkeletonCard;