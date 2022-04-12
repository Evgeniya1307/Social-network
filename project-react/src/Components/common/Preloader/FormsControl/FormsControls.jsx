import React from "react";
import { WrappedFieldProps } from "redux-form";
import s from "./FormsControls.module.css";

const FormControl = ({input, meta, children, ...props})=>{
    let hasError = meta.touched && meta.error;

    return (
    <div className={s.formControl + " " + (hasError ? s.error : " ")}>
          <div>
            {children}
          </div>
          {hasError && <span>{meta.error}</span>}
        </div>
    );
    }

    export const Textarea=(props)=> {
        const {input, meta, children, ...restProps}=props 
        return <FormControl {...props}><textarea {...input}{...restProps}/></FormControl>
    };
    
