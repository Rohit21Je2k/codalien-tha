import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import StoreProvider from "./util/Context/StoreContext";
import NavBar from "./components/Navigation/NavBar";
import Home from "./containers/Home/Home";
import LoginPage from "./components/Login/LoginPage";

import "./styles/index.css";

function App() {
  return (
    <div>
      <StoreProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </Router>
      </StoreProvider>
    </div>
  );
}

export default App;
