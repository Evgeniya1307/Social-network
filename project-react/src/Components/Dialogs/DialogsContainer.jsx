import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";



let mapStateToProps = (state) =>{
    return {
dialogsPage: state.dialogsPage,
isAuth:state.auth.isAuth
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
let AuthNavigateComponent=(props)=> {
    if (!props.isAuth) return <Navigate to="/Login"/>
    return <Dialogs{...props}/>
}

const DialogsContainer = connect (mapStateToProps,mapDispatchToProps) (AuthNavigateComponent);

export default DialogsContainer;
