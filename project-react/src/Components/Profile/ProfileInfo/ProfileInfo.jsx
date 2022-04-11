import React from "react";
import Preloader from "../../../redux/common/Preloader/Preloader";
import s from "./Profile.module.css"

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader /> 
  }

    return (
       <div>
           <div>
           <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZrzqT-UhCNY44OyJVzG24myx1SzKRfjlR9g&usqp=CAU"/>
        </div>
        <div className={s.descriptionBlock}>
          <img src ={props.profile.large}/>
          ava + description
        </div>
        </div>
      
     
    )

}

export default ProfileInfo