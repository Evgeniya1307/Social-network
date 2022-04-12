import React from 'react';
import {addPostActionCreator,onPostChangeActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "../MyPosts";
import { useDispatch } from "react-redux";



const MyPostsContainer = () => {
    const dispatch = useDispatch();
    let addPost = (myPosts) => {
      dispatch(addPostActionCreator(myPosts));
    };
    const onPostChangeContainer = (newText) => {
      dispatch(onPostChangeActionCreator(newText));
    };
  
    return (
      <div>
        <MyPosts
          addPost={addPost}
          onPostChangeContainer={onPostChangeContainer}
        />
      </div>
    );
  };
  
export default MyPostsContainer;