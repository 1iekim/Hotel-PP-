import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { allRoutes } from "../routes";
import { MAIN_PAGE } from "../utils/consts";

const AppRouter = () => {
  return (
    <Routes>
      {allRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} Component={Component} exact />
      ))}
      <Route path="*" element={<Navigate to={MAIN_PAGE} />} />
    </Routes>
  );
};

export default AppRouter;
