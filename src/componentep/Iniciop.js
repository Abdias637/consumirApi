import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


export function Iniciop(){
    const [dataProductos, setDataProductos]=useState([]);
    useEffect(()=>{
        axios.get("https://asas-x4sc.onrender.com/api/mostrarProductos")
        .then((response)=>{
            console.log(response);
            setDataProductos(response.data);
        })
        .catch((err)=>{
            console.log("Error al recuperar de Api");
        });
    },[]);
    const listaProductos=dataProductos.map((producto, id)=>{
        var editar="/EditarProducto"+producto.id;
        var borrar="/BorrarProducto"+producto.id;
        return(
            <tr key={id} className="align-middle" > 
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.cantidad}</td>
                <td>{producto.precio}</td>
                <td>
                    <Link to={editar}>Editar</Link>
                    <Link to={borrar}>Borrar</Link>
                </td>
            </tr>
        );
    });
    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>id</th>
                    <th>nombre</th>
                    <td>cantidad</td>
                    <td>precio</td>
                </tr>
            </thead>
            <tbody>
                {listaProductos}
            </tbody>
        </table>
    );
}
