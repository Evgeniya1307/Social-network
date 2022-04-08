import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import {Navigate} from "react-router-dom"
import { withAuthNavigate } from "../Profile/hoc/withAuthNavigate";



let mapStateToProps = (state) =>{
    return {
dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
       sendMessage: () => {
        dispatch(sendMessageCreator());
    },
        updateNewMessageBody: (body) => {
        dispatch(updateNewMessageBodyCreator(body));
}
}
}


let AuthNavigateComponent= withAuthNavigate(Dialogs);


const DialogsContainer = connect (mapStateToProps,mapDispatchToProps) (AuthNavigateComponent);

export default DialogsContainer;
