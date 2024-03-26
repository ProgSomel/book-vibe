import { Outlet } from "react-router-dom"
import Navbar from "../Pages/Home/Navbar/Navbar"

function Root () {
  return (
    <div>
        <div className="max-w-screen-2xl mx-auto px-2 md:px-4 lg:mx-8 mt-2">
        <Navbar></Navbar>
        <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Root