import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { auth } from "../firebase";
import App from "../App";

import { useNavigate } from "react-router-dom";


const Admin = () => {
  const { user } = useContext(AuthContext);
  const Navigate = useNavigate();

  const handleLogOut = () => {
    auth.signOut();
    Navigate("/");
  };

  if (user == null) {
    return <Navigate to="/" />;
  }

  return (
    <div className="">
      <App />
    </div>
  );
};

export default Admin;
