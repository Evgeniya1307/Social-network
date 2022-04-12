import React from 'react'
import s from './../Dialogs.module.css'


const Message = (props) => {
  const Avatar = <img className={s.img} src={"https://themified.com/friend-finder/images/users/user-7.jpg"} alt="avatar" />
  return (
      <div className={s.dialog}>{Avatar}{props.message}</div>
  )
}

export default Message;
