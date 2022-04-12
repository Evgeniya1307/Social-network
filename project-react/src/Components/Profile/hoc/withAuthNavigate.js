import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
  isAuth: state.authReducer.isAuth
}
}

export function withAuthNavigate = (Component) =>{
  const NavigateComponent=(props)=>{
    let {isAuth, ...restProps}=props
    if (!props.isAuth) return <Navigate to={"/Login"}/>
    return<Component {...restProps} />
}
return connect(mapStateToProps)(NavigateComponent)
}

export default withAuthNavigate;
