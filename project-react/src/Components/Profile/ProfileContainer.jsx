import React from "react";
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profile-reducer";
import {connect} from 'react-redux';
import {Navigate, useParams} from "react-router-dom";

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

    return(
<Profile {...this.props}  profile={this.props.profile}/>
    )
  }
}

let AuthNavigateComponent=(props)=> {
    if (!props.isAuth) return <Navigate to="/Login"/>
    return <ProfileContainer{...props}/>
}

let mapStateToProps = (state) => ({ 
    profile: state.profilePage.profile,
    isAuth:state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(AuthNavigateComponent);

export default connect(mapStateToProps, 
    {getUserProfile}) (WithUrlDataContainerComponent); 