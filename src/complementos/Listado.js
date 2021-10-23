import '../App.css';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const Listado = (props) => {
    return(
      
        <div className="Listado">
            <h4>Carrito de compras</h4>
            <div className="Conteiner">
            <h4> Precio Total:${(props.Total)}</h4>
            <Button className="btn btn-danger m-2" onClick={()=>props.deleteCar()}>Vaciar Carrito</Button>
            </div>
            <Table striped bordered className="Tabla">
                <thead>
                  <tr>
                    <th></th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Importe</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    props.lista.map((item,index)=>
                      <tr key={index}>
                        <td><img src={item.img}/></td>
                        <td>{item.title}</td>
                        <td>${item.precio}</td>
                        <td>{item.cantidad}</td>
                        <td>${(item.cantidad*item.precio)}</td>
                        <td><Button onClick={()=>props.deleteProduct(item)} variant="danger">Quitar Producto</Button></td>
                      </tr>
                    )
                  }
                </tbody>
              </Table>
          </div>
    );
}

export default Listado;