import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

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

  return (
    <button onClick={handleLogOut} className="">
      Log Out
    </button>
  );
};

export default Admin;
