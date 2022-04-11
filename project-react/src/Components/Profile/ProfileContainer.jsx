import React from "react";
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profile-reducer";
import {connect} from 'react-redux';
import {Navigate, useParams} from "react-router-dom";
import {withRoyter} from "react-router-dom"
import { withAuthNavigate } from "./hoc/withAuthNavigate";
import { compose } from "redux";



const withRouter = WrappedComponent => props => {
    const params = useParams();
    // etc... other react-router-dom v6 hooks
    return (
        <WrappedComponent
            {...props}
            params={params}
            // etc...
        />
    );
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

if (!this.props.isAuth) return <Navigate to={"/login"}/>
    return(
<Profile {...this.props}  profile={this.props.profile}/>
    )
  }
}

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthNavigate
)(ProfileContainer);


let mapStateToProps = (state) => ({ 
    profile: state.profilePage.profile,
});
 