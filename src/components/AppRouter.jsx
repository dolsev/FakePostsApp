import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes,privateRoutes } from "../router/routes";
import { useContext } from "react";
import { AuthContext } from "../context";
import Loader from "./UI/Loader/Loader";

function AppRouter() {
  const {isAuth, isLoading} = useContext(AuthContext);
  if (isLoading){
    return <Loader/>
  }
  return (
    isAuth
    ?
    <Routes>
      {privateRoutes.map((route)=>{
        return <Route 
        path={route.path} 
        element={route.element} 
        exact={route.exact} key={route.path}/>
      })}
      <Route path="/*" element={<Navigate to="/posts" replace />} />
  </Routes>
      :
      <Routes>
      {publicRoutes.map((route)=>{
        return <Route 
        path={route.path} 
        element={route.element} 
        exact={route.exact} key={route.path}/>
      })}
        <Route path="/*" element={<Navigate to="/login" replace />} />

      </Routes>

  );
}

export default AppRouter;
