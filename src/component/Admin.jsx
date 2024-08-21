import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import Skill2 from "../Pages/Skill2";

const Admin = () => {
  const { user } = useContext(AuthContext);
  const Navigate = useNavigate();

  const handleLogOut = () => {
    AuthContext.signOut();
    Navigate("/");
  };

  if (user == null) {
    return <Navigate to="/" />;
  }

  return <Skill2 />;
};

export default Admin;
