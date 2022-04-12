import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import {NavLink, Navigate } from "react-router-dom";
import { AddmessageFormRedux } from "./AddMessageForm";
import { useSelector } from "react-redux";
import { DialogsType } from  "../../redux/dialogs-reducer";


const DialogsItems = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + "" + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};


export const Dialogs = (props: dialogsType) => {
  const dialogsMessage = useSelector<AppRootStateType, DialogsType>(
    (state) => state.dialogsReducer
  );

  let DialogsElements = dialogsMessage.DialogsData.map((d) => (
    <DialogsItems name={d.name} id={d.id} />
  ));
  let messagesElement = dialogsMessage.MessagesData.map((m) => (
    <Message message={m.message} />
  ));

 

  const addNewMessage = (inputData) => {
    props.addChatContainer(inputData.newMessageBody);
  };
  if (!props.isAuth) return <Navigate to={"/Login"} />;
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <span>{DialogsElements}</span>
      </div>
      <div className={s.messages}>
        <div>{messagesElement}</div>
        <AddmessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};
