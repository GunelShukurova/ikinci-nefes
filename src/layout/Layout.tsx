import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"


const Layout = () => {
  return (
    <div>
      <Header/>
      <main className="pt-[78px]">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
