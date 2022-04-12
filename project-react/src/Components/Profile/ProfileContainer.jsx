import React from "react";
import Profile from "./Profile";
import {getUserProfile,getStatus, updateStatus} from "../../redux/profile-reducer";
import {connect} from 'react-redux';
import { compose } from "redux";
import {withRouter,} from "react-router-dom";
import withAuthNavigate from "./hoc/withAuthNavigate";



export const withRouter = (Component) =>{
    let RouterComponent = (props) => {
            const match = useMatch('/profile/:userId/');
            return <Component {...props} match={match}/>;
    }
    return RouterComponent;
};




class ProfileContainer extends React.Component{
    componentDidMount() {
        // debugger;
        //
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = String(this.props.AuthorizedUserId);
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUsersProfile(userId);
        this.props.getStatus(userId)
    }

    render () {

//if (!this.props.isAuth) return <Navigate to="/login"/>
    return(
        <div>
<Profile {...this.props}  
profile={this.props.profile}
status={this.props.status}updateStatus={this.props.updateStatus}/>
</div>
    )
  }
}

let mapStateToProps = (state) => { 
    return {
        profile: state.profileReducer.profile,
        status: state.profileReducer.status,
        AuthorizedUserId: state.authReducer.id,
        isAuth: state.authReducer.isAuth
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {getUserProfile,getStatus, updateStatus}),
withAuthNavigate)(ProfileContainer);



 
