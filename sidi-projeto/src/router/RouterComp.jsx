import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/Login/index'
import Home from '../pages/Home/index'
import Register from "../pages/Register"
import ForgotPassaword from '../pages/Esqueceu'
import IntervaloEntrar from "../pages/Intervalo"; 
import RetornoIntervalo from "../pages/RetornoIntervalo";
import Saida from "../pages/Saida";


export default function RouterComp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/esqueceu" element={<ForgotPassaword />} />
                <Route path="/intervalo" element={<IntervaloEntrar />} />
                <Route path="/retorno" element={< RetornoIntervalo />} />
                <Route path="/Saida" element={< Saida />} />

                
                
                
                
            </Routes>
        </BrowserRouter>
    );
}
