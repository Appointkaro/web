import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/signUp";
import TwoFactorAuthentication from "./components/TwoFactorAuthentication";
import SignIn from "./components/signIn";
import SideNav from "./components/sideNav";
import DashBoard from "./components/Dashboard";
import BookAppointment from "./components/book-appointment"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/auth" element={<TwoFactorAuthentication />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/sideNav" element={<SideNav />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/bookAppointment" element={<BookAppointment />} />
      </Routes>
    </Router>
  );
}

export default App;
