import '../App.css';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Productos = (props) => {
    return(
        <div className="App-Productos">
        <h4>Productos</h4>
        <Table striped bordered className="Tabla">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Imagen</th>
              <th>Precio</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              props.productList.map((item,index)=>
                <tr key={index}>
                  <td>{item.title}</td>
                  <td><img src={item.img}/></td>
                  <td>${item.precio}</td>
                  <td><Button onClick={()=>props.agregar(item)}variant="success">Agregar</Button></td>
                </tr>
              )
            }
          </tbody>
        </Table>
      </div>
    );
}

export default Productos;