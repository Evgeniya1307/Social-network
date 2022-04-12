import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from "../common/Preloader/FormsControl/FormsControls";
import { maxLengthCreator, required } from '../../../utils/validators/validators'
import s from "./Dialogs.module.css";



const maxlength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          className={s.inputStyle}
          component={Textarea}
          validate={[required, maxlenght50]}
          name="newMessageBody"
          placeholder="Enter your message"
        />
      </div>
      <div>
        <button className={s.button}>Sent</button>
      </div>
    </form>
  );
};

export const AddmessageFormRedux = reduxForm
({form: "dialogAddMessageForm",
})(AddMessageForm);
