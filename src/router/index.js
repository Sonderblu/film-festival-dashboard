import React from "react";
import { BrowserRouter } from "react-router-dom";
import DashboardRoute from "../pages/app/router";
function Router() {
  return (
    <BrowserRouter>
        <DashboardRoute />
    </BrowserRouter>
  );
}

export default Router;
