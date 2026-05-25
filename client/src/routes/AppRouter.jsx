import React from "react";
import LoginPage from "../pages/public/LoginPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/public/HomePage";
import NavbarHomepage from "../components/layout/NavbarHomepage";
export default function AppRouter() {
  return (
    <Routes>
      <Route path="/authpage" element={<LoginPage />}></Route>

      <Route path="/" element={<NavbarHomepage />}>
        <Route path="/homepage" element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
}
