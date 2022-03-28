import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./redux/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/login/login";

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
         <Routes>
          <Route  path="/dialogs/*" element={ <DialogsContainer />} />
          <Route path="/profile/*" element={<ProfileContainer />}>
        <Route path="/:userId?*" element={<ProfileContainer />} />
<Route path="/users/*" element={ <UsersContainer/>}/>
<Route path="/Login/*" element={<Login/>}/>

            </Route>
            </Routes>
        
      </div>
    </div>
  );
};

export default App;
