import React from 'react';
import { reduxForm,Field } from 'redux-form';
import { Input } from "./../common/Preloader/FormsControl/FormsControls";
import { required } from "../utilsvalidators/validators";
import { connect } from 'react-redux';
import { Login } from '../../redux/auth-reducer';
import style from "./../common/Preloader/FormsControl/FormsControls.module.css";
import { Navigate } from 'react-router-dom';

export let LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    validate={[required]}
                    className={s.input}
                    placeholder={"Email"}
                    name={"email"}
                    component={Input}
                />
            </div>
            <div>
            <Field
                    validate={[required]}
                    className={s.input}
                    placeholder={"Password"}
                    name={"password"}
                    component={Input}
                    type={"password"}
                />
            </div>
            <div>
                <Field className={s.input} component={Input} name={"rememberMe"}
                       type={"checkbox"}/>{" "} Remember me
            </div>
            {props.error && <div className={style.formSummaryError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = (LoginForm)=>{

  (email, password, rememberMe)
    isAuth
};

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };
    if (props.isAuth) {
        return <Navigate to='/Profile'/>
    }
    return (
        <div>
            <h1> Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateTpProps = (state)=> {
    return {
        isAuth: state.authReducer.isAuth
    }
}

export default connect(mapStateTpProps, {login: Login})(Login);