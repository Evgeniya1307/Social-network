import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./redux/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";


const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
             path="/dialogs/*"
            element={ <DialogsContainer />} />
          <Route path="/profile" element={<ProfileContainer />}>
        <Route path=":userId" element={<ProfileContainer />} />
      </Route>
<Route
            path="/users/*"
            element={ <UsersContainer/>}/>
</Routes>
        
      </div>
    </div>
  );
};

export default App;