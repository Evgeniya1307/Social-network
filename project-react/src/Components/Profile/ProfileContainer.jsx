import React from "react";
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profile-reducer";
import {connect} from 'react-redux';
import {Navigate, useParams} from "react-router-dom";
import {withRoyter} from "react-router-dom"
import { withAuthNavigate } from "./hoc/withAuthNavigate";



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

let AuthNavigateComponent = withAuthNavigate(ProfileContainer);



let mapStateToProps = (state) => ({ 
    profile: state.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(AuthNavigateComponent);

export default connect(mapStateToProps, 
    {getUserProfile}) (WithUrlDataContainerComponent); 