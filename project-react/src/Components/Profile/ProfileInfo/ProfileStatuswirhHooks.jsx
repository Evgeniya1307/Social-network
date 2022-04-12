import React, {ChangeEvent, useEffect, useState} from "react";
import s from "./ProfileStatus.module.css";

function ProfileStatusWithHooks(props) {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode && (
                <div>
              <span onDoubleClick={activateEditMode}>
                {props.status || "-----"}
              </span>
                </div>
            )}
            {editMode && (
                <div>
                    <input
                        className={s.inputStyle}
                        onChange={onStatusChange}
                        autoFocus={true}
                        onBlur={deActivateEditMode}
                        value={status}
                    />
                </div>
            )}
        </div>
    );
}

export default ProfileStatusWithHooks;