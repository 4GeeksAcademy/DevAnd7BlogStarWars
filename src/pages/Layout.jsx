import 'bootstrap-icons/font/bootstrap-icons.css';

import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    return (
        <ScrollToTop>
            <div className="container stars text-white">
                <Navbar />

                <div className="my-2">
                    <Outlet />
                </div>

                <Footer />

            </div>
        </ScrollToTop>
    )
}