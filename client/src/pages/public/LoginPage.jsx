import React from "react";
import NavbarLogin from "../../components/layout/NavbarLogin";
import Footer from "../../components/layout/Footer";
import Otp from "../../components/layout/Otp";
import SigninPage from "./SigninPage";

export default function LoginPage() {
  return (
    <div className="pt-28">
      <NavbarLogin />
      <SigninPage />
      <Footer />
    </div>
  );
}
