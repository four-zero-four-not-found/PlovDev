import React from 'react'
import NavbarLogin from '../../components/layout/NavbarLogin'
import SigninPage from './SigninPage'
import Footer from '../../components/layout/Footer'

export default function LoginPage() {
  return (
    <div className="pt-28">
      <NavbarLogin/>
      <SigninPage/>
      <Footer/>
    </div>
  )
}
