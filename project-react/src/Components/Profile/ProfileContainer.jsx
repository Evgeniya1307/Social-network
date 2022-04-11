import React from "react";
import Profile from "./Profile";
import {getUserProfile,} from "../../redux/profile-reducer";
import {connect} from 'react-redux';
import { compose } from "redux";
import {withRouter, Redirect} from "react-router-dom";
import withAuthRedirect from "./hoc/withAuthRedirect";



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
        if (!userId){
            userId=2;
        }

        this.props.getUserProfile(userId);
    }

    render () {

if (!this.props.isAuth) return <Redirect to={"/login"}/>
    return(
<Profile {...this.props}  profile={this.props.profile}/>
    )
  }
}

let mapStateToProps = (state) => { 
    return({
     profile: state.profilePage.profile,
     isAuth: state.auth.isAuth
    })
 } 

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);



 
