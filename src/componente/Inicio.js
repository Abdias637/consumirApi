import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


export function Inicio(){
    const [dataUsuarios, setDataUsuarios]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/api/mostrarUsuarios")
        .then((response)=>{
            console.log(response);
            setDataUsuarios(response.data);
        })
        .catch((err)=>{
            console.log("Error al recuperar de Api");
        });
    },[]);
    const listaUsuarios=dataUsuarios.map((usuario, id)=>{
        var editar="/EditarUsuario"+usuario.id;
        var borrar="/BorrarUsuario"+usuario.id;
        var foto="http://localhost:3000/images/"+usuario.foto;
        return(
            <tr key={id} className="align-middle" > 
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.usuario}</td>
                <td><img src={foto} width="100px" alt="foto de usuario"/></td>
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
                    <th>Id</th>
                    <th>Nombre</th>
                    <td>Usuario</td>
                    <td>Foto</td>
                </tr>
            </thead>
            <tbody>
                {listaUsuarios}
            </tbody>
        </table>
    );
}
