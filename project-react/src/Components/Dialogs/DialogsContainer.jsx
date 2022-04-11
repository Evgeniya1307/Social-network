import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import withAuthRedirect  from "../Profile/hoc/withAuthRedirect";
import { compose } from "redux";



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        avatar: state.auth.authUserProfile
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs); //смысл commpose возьми диалогс закинь в эту функцию withAuthRedirect, потом получи результат и этот результат    connect(mapStateToProps, mapDispatchToProps)

