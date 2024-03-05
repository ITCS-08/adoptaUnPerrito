import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment } from 'react';
import MyCard from './components/MyCard';
import Header from './components/Header';
import Footer from './components/Footer';


import './App.css'

function App() {

  return (
    <>

      <div className="container productoDos">

        <Header title="Adopta Un Perrito">

        </Header>
        <div className="container">
        <Fragment>
          <div className="row mt-4">
            <MyCard 
              title="Perrito Cacchorro"
              image="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_640.jpg"
              textButton="Adoptar"
              text="Imagen N° 1"
              color="success"
            >

            </MyCard>

            <MyCard className="mt-5 mb-4 "
              title="Perrito Joven"
              image="https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_640.jpg"
              textButton="Adoptar"
              text="Imagen N° 2"
              color="danger"
            >
            </MyCard>

            <MyCard
              title="Perrito Adulto"
              image="https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559_640.jpg"
              textButton="Adoptar"
              text="Imagen N° 3"
              color="warning"
            >
            </MyCard>
          </div>
        </Fragment>
        </div>

        <div>

          <Footer parrafo="Santiago 2024 - Derechos reservados - Pagina para adoptar una mascota (Perrito)">

          </Footer>

        </div>

        <br></br> <br></br>

        {/* <div>

          <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="http://placekitten.com/g/200/300"/>
          <Card.Body>
            <Card.Title title="Titulo"></Card.Title> 
              <Card.Text> 
                  Some quick example text to build o
              </Card.Text>
              
          </Card.Body> 
          </Card>
        



        </div> */}

        {/* <Producto></Producto>
        <Producto nombre=" ALF" descripcion="Producto Aseo" stock="100"></Producto>
        <Producto nombre=" ALF - 2 /" descripcion="Producto Baño /" stock="0"></Producto>
        <Producto nombre=" ALF - 3" descripcion="Producto Cocina" stock="0"></Producto>
        <Tienda ></Tienda>
        <Tienda title="PRODUCTO N° 1" price="500" coment="UNO" ></Tienda>
        <Tienda title="PRODUCTO N° 2" price="400" coment="DOS"></Tienda>
        <Tienda title="PRODUCTO N° 3" price="200" coment="TRES"></Tienda>
        <Tienda title="PRODUCTO N° 4" price="8900" coment="CUATRO"></Tienda> */}

      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
