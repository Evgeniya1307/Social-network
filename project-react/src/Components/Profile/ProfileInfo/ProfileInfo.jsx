import React from 'react';
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import Preloader from '../../../redux/common/Preloader/Preloader';



export function ProfileInfo(props) {
  if (!props.profile) {
      return <Preloader/>;
  }

  return (
    <div className={s.ProfileStyle}>
        <div className={s.ProfileInfo}></div>
        <div>
            <img
                className={s.img}
                src={props.profile.photos.small}
                alt="ProfileFoto"
            />
            <ul>
                <h2>Contacts</h2>
                <li>
                    <span>{props.profile.contacts.github}</span>
                </li>
                <li>
                    <span>{props.profile.contacts.facebook}</span>
                </li>
                <li>
                    <span>{props.profile.contacts.instagram}</span>
                </li>
                <ProfileStatus
                    updateStatus={props.updateStatus}
                    status={props.status}
                />
            </ul>
        </div>
    </div>
);
}
export default ProfileInfo;
