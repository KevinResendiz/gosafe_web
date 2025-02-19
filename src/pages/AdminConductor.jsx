import {FaTrashAlt, FaPen, FaSearch } from "react-icons/fa"

function AdminConductor() {
    const usuarios = [
        { correo: 'ejemplo1@gmail.com', nombre: 'Juan Jose', apellidos:'Lopez Perez', telefono: 6541423435, rol:'Chofer' },
        {correo: 'ejemplo2@gmail.com', nombre: 'Juan Jose', apellidos:'Lopez Perez', telefono: 6541423435, rol:'Chofer'},
        {correo: 'ejemplo3@gmail.com', nombre: 'Juan Jose', apellidos:'Lopez Perez', telefono: 6541423435, rol:'Chofer'}
        
    ];
    
    return (
        <div style={styles.container}>
            <h1>Administrar Conductores</h1>
            <FaSearch /><input type="text" placeholder="Buscar nombre" style={styles.inp}></input>
        
        <div style={styles.listcontainer}>
        <table style={styles.tabla}>
            <thead>
                <tr>
                    <th>Correo</th>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Telefono</th>
                    <th>Rol</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map((usuario) => (
                    <tr key={usuario.correo}>
                        <td style={styles.td}>{usuario.correo}</td>
                        <td style={styles.td}>{usuario.nombre}</td>
                        <td style={styles.td}>{usuario.apellidos}</td>
                        <td style={styles.td}>{usuario.telefono}</td>
                        <td style={styles.td}>{usuario.rol}</td>
                        <FaTrashAlt style={styles.td}/>
                        <FaPen  style={styles.td}/>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        </div>
        
    );
}
const styles={
    container:{
        backgroundColor:"#e1e9f0",
    },
    inp:{
        borderRadius:"5px",
        height:"30px",
        width:"300px",
        margin:"20px"
        
    },
    listcontainer:{
        padding:"20px",
        borderRadius:"5px",
        border:"5px solid #bbc1c7"
    },
    tabla:{
        marginLeft:"80px"
    },
    td:{
        padding: '30px',
    }
}
export default AdminConductor;