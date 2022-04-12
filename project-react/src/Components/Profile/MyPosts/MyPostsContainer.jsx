import React from 'react';
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


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