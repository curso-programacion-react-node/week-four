import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Navbar from "../Components/Navbar"
import Contact from "../Pages/Contact"

export default function MyRoutes() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contacto" element={<Contact />} />
                    <Route path="*" element={<h1>404 No Encontrado</h1>} />
                </Routes>
            </div>
        </>
    )
}