import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import {Navigate} from "react-router-dom"
import { withAuthNavigate } from "../Profile/hoc/withAuthNavigate";
import { compose } from "redux";



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


export default compose(
    connect(mapStateToProps, mapDispatchToProps), 
    withAuthRedirect
 ) (Dialogs); //смысл commpose возьми диалогс закинь в эту функцию withAuthRedirect, потом получи результат и этот результат    connect(mapStateToProps, mapDispatchToProps)

