import React from 'react'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import withAuthRedirect from '../Profile/hoc/withAuthNavigate'
import { compose } from 'redux'

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    avatar: state.auth.authUserProfile
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody))
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthNavigate
)(Dialogs) // смысл commpose возьми диалогс закинь в эту функцию withAuthNavigate, потом получи результат и этот результат    connect(mapStateToProps, mapDispatchToProps)
