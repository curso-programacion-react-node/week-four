import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Navbar from "../Components/Navbar"

export default function MyRoutes() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contacto" element={<h1>Contacto</h1>} />
                    <Route path="*" element={<h1>404 No Encontrado</h1>} />
                </Routes>
            </div>
        </>
    )
}