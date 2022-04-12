import React from 'react'
import s from './MyPosts.module.css'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from "../../Dialogs/utils/validators";
import { Textarea } from "../../common/Preloader/FormsControl/FormsControls";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

export const maxLength10 = maxLengthCreator(10);

export const MyPosts = (props) => {
  const profilePage = useSelector(
      (state) => state.profileReducer
  );

  let postsElement = profilePage.MyPostsData.map((m) => (
    <Posts message={m.message} LikesCount={m.LikesCount} />
));

const addPost = (inputData) => {
  props.addPost(inputData.myPosts);
};

return (
  <div className={s.posts}>
      <div>{postsElement}</div>
      <AddPostFormRedux onSubmit={addPost} />
  </div>
);
};

export const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
      <div>
      <Field
                        className={s.inputStyle}
                        component={Textarea}
                        name="myPosts"
                        placeholder="Enter your message"
                        validate={[required, maxLength10]}
                    />
                </div>
                <div>
                    <Button>Add post</Button>
                </div>
            </div>
        </form>
  );


  const AddPostFormRedux = reduxForm<AddPostFormType>({
    form: "addPostForm",
})(MypostsForm)
}

export default MyPosts;