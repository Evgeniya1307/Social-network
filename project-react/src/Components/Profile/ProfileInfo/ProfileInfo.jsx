import React from "react";
import s from "./Profile.module.css"

const ProfileInfo = (props) => {
    return (
       <div>
           <div>
           <img src ="https://picfiles.alphacoders.com/246/246686.jpg" alt='flowers' width={1000}/>
        </div>
        <div className={s.descriptionBlock}>
          ava + description
        </div>
        </div>
      
     
    )

}

export default ProfileInfo