import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./redux/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/login/login";
import { Link } from "react-router-dom";



const App = () => {
 
  return (
   
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
         <Routes>
          <Route  path="/dialogs/*" element={ <DialogsContainer />} />
        <Route path="/profile/:userId?*" element={<ProfileContainer />} />
<Route path="/users/*" element={ <UsersContainer/>}/>
<Route path="/login/*" element={<LoginPage />} />
</Routes>
  
        
      </div>
    </div>
  );
};

export default App;




