import React from 'react'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
  const path = '/dialogs/' + props.id

  return (
    <NavLink className='users-dialogs-wrap' to={path}>
      <div className='users-dialogs-inner col-12 d-flex align-items-center pt-2 pb-2'>
        <div className='users-dialogs__img mr-3'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ARWKCdw-3CQxQ5nQdTZRJxF2v6SLpWtGPg&usqp=CAU'
            alert=''
          />
        </div>
        <div>
          {props.name}
        </div>
      </div>
    </NavLink>
  )
}

export default DialogItem
