import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error } from "./Error";
import { Inicio } from "./Inicio";

export function Rutas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Error/>}></Route>
                <Route path="/" element={< Inicio/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}