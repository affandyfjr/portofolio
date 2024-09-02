import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Login from "./component/Login.jsx";

import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/footer.jsx";
import Home from "./Pages/Home.jsx";
import Admin from "./component/Admin.jsx";
import PrivateRoute from "./component/PrivateProvider.jsx";
import AuthProvider from "./component/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProvider>
    <BrowserRouter>
    
      <Routes>
        <Route path="/Login" element={<Login/>} />
        <Route path="/App" element={<App/>} />
        <Route path="/Admin" element={<PrivateRoute><Admin/></PrivateRoute>} />
        <Route path="/" exact element={<App/>} />
      </Routes>
      <Footer />
    
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
