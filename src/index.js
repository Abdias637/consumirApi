import React from "react";
import ReactDOM  from "react-dom/client";
import { Rutas } from "./componente/Rutas";
import { Menu } from "./componente/Menu";

const root=ReactDOM.createRoot(document.getElementById ("root"));

root.render(
    <>
        <Menu />
        <Rutas />
    </>

);