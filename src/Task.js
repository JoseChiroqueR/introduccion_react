import './task.css'

export function TaskCard({ready}) {
return (
    
    <div className='card'>
    <h1>Desafío 01 - Introduccion a React_js</h1>
    <span className={ready ? 'bg-green' : 'bg-red'}>
        {ready ? "TAREA REALIZADA 😉" : "TAREA PENDIENTE 🙃"}
    </span>
    </div>
    
);
}

/* Ejemplo 1 de estilo en linea
    export function TaskCard() {
    return (
    <div style={{backgroundColor:"#202020", color: "#fff", padding: "20px"}}>
        <h1 style={{fontWeight:"lighter"}}>Tarea numero 01</h1>
        <p>Tarea realizada</p>
    </div>
    );
  } */