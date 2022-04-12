import { applyMiddleware, combineReducers, createStore } from 'redux'
import {dialogsReducer} from './dialogs-reducer'
import {profileReducer} from './profile-reducer'
import {sidebarReducer} from './sidebar-reducer'
import {usersReducer} from './users-reducer'
import authReducer from './auth-reducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  users:usersReducer,
  form: formReducer,
  app: appReduecer

})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))// applyMiddleware приняли промежуточн.слои
window.store = store

export default store;
