import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="min-w-full h-screen bg-light">
      <Header />
      <div className="min-h-main font-noto">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout