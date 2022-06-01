import React from "react";
import { Route, Routes } from "react-router-dom";
import AppTemplate from "../../components/template/app";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<AppTemplate />}></Route>
    </Routes>
  );
}

export default Router;
