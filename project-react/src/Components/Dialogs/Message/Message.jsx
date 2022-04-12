import React from 'react'

const Message = (props) => {
  return (
    <div className='row mb-4'>
      <div className='col-md-1 col-2 mr-3'>
        <div className='users-dialogs__img mr-3'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ARWKCdw-3CQxQ5nQdTZRJxF2v6SLpWtGPg&usqp=CAU'
            alt=''
          />
        </div>
      </div>
      <div className='col-md-5  col-8 users-dialogs__text'>
        <div className='users-dialogs__text'>
          {props.message}
        </div>
      </div>
    </div>
  )
}

export default Message
