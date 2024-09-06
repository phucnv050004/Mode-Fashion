import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Banner from "../page/website/home/Banner"

const LayoutClient = () => {
  return (
    <div>
      
      <Header/>
      <Banner/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default LayoutClient