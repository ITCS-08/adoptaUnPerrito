const Producto = (props) =>{
    const productNameUno = "Producto N° 1"
    const productNameDos = "Producto N° 2"
    console.log("Creando un Producto");
    const myStyle = {fontSize:'12px', color: 'brown'};
    return (
    <>
    <div>
    <h1 className="producto">Hola Amigos</h1>
    <h2>{productNameUno}</h2>
    <h2> Nombre Producto: {props.nombre} </h2>
    <h2> Descripcion Producto: {props.descripcion}</h2>  
    <h2> Stock Producto: {props.stock}</h2>
    <p>Operación Matematica : {3 * 3}</p>

    <p className={props.stock <= 0 ? 'sinStock' : null}> Nombre:{props.nombre} - Descripción: {props.descripcion} <span>stock: {props.stock}</span> </p>
    
    </div>

    <div>
    <h1>Bye Amigos</h1>
    <h2>{productNameDos}</h2>
    <p>Operación Matematica : {2 + 3}</p>
    </div>

    <div>
    <h1 className="productoDos sinStock"> {productNameDos} </h1>
    <p style={{fontSize:'12px', color: 'blue'}}> Operaciones matemática Suma: {2 + 2}</p>
    <p style={ myStyle }> Operaciones matemática Resta: {2 - 2} </p>
    <p>Operaciones matemática Multiplicación: {2 * 2}</p> <p>Operaciones matemática División: {2 / 2}</p>
    <p>Operaciones matemática Módulo: { 2 % 2 }</p>
    </div>

    

    </> 
    )      
};

export default Producto;