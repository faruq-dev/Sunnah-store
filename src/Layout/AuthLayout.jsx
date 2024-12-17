import { Outlet } from "react-router-dom"
import Footer from "../components/shared/Footer"
import Header from "../components/shared/Header"

const AuthLayout = () => {
  return (
    <>
    <Header/>
    <div>
        <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default AuthLayout