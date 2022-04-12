import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi', likesCount: 1 },
        { id: 2, message: 'My first post', likesCount: 30 }
      ],
      newPostText: 'react'
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Oly' },
        { id: 2, name: 'Polina' },
        { id: 3, name: 'Alex' },
        { id: 4, name: 'Gena' },
        { id: 5, name: 'Petr' },
        { id: 6, name: 'Ira' }
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hi is react' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' }
      ],
      newMessageBody: ''

    },
    sidebar: {}
  },
  _callSubscriber () {
    console.log('state changed')
  },
  getState () {
    return this._state
  },
  subscribe (observer) {
    this._callSubscriber = observer
  },

  dispatch (action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state)
  }
}

export default store

window.store = store
