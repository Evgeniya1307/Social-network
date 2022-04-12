import React from 'react'
import Dialogs from './Dialogs'
import withAuthNavigate from '../Profile/hoc/withAuthNavigate'
import { compose } from 'redux'
import DialogsContainer from '../DialogsContainer'
import { sendMessageBodyAC } from "../../../Redux/Dialogs-reducer";



function DialogsContainer() {
  const dispatch = useDispatch();
  const isAuthLogin = useSelector(
    (state) => state.authReducer
  );

  const addChatContainer = (newMessageBody) => {
    dispatch(sendMessageBodyAC(newMessageBody));
  };
  return (
    <Dialogs isAuth={isAuthLogin.isAuth} addChatContainer={addChatContainer} />
  );
}

export default compose(
  withAuthNavigate
)(DialogsContainer) ;// смысл commpose возьми диалогс закинь в эту функцию withAuthNavigate, потом получи результат и этот результат    connect(mapStateToProps, mapDispatchToProps)
