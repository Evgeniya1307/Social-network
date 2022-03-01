import React from "react";
import s from "./Post.module.css";



const Post = (props) => {
    return (
        <div className={s.item}>
        <img src="https://www.iguides.ru/upload/iblock/e93/e93ea66cd2c6bbf66e9fbbe4204f5cd9.jpg" alt="message"/>
   {props.message}
      <div>
      <span>like</span> {props.likesCount}
      </div>
    </div>
    )
}

export default Post;