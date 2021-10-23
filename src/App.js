import './App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './complementos/Header';
import Productos from './complementos/Productos';
import Listado from './complementos/Listado';
import img1 from './img/img1.png';
import img2 from './img/img2.png';
import img3 from './img/img3.png';
import img4 from './img/img4.png';
import img5 from './img/img5.png';
import img6 from './img/img6.png';

class App extends Component{
  constructor() {
    super();
    this.state = {
      cart:[],
      total:0,
      productList:[
        {
          id:1,
          title:'Canon  EOS-1D X Mark III ', 
          precio:110000, 
          img:img1
        },
        {
          id:2,
          title:'Cámara Nikon Z 7II Mirrorless', 
          precio:82899, 
          img:img2
        },
        {
          id:3,
          title:'Cámara Sony Alpha a7R III Cuerpo', 
          precio:57119, 
          img:img3
        },
        {
          id:4,
          title:'Cámara Canon 7D Mark II Cuerpo', 
          precio:33000, 
          img: img4
        },
        {
          id:5,
          title:'Cámara Canon EOS RP Mirrorless Cuerpo', 
          precio:21999, 
          img: img5
        },
        {
          id:6,
          title:'Cámara Canon EOS R5 Mirrorless con lente', 
          precio:99999, 
          img:img6
        },
      ],
    };
  }

  addProduct=(f)=>{
    let buscado = this.state.cart.find(e=>e.id===f.id)
    let item_temp
    let erase_temp = this.state.cart
    if (buscado !== undefined){
      item_temp={
        cantidad: buscado.cantidad + 1,
        img:f.img,
        id:f.id,
        
        title:f.title,
        precio:f.precio
      }
      erase_temp = this.state.cart.filter((e)=>e.id!==f.id)

    }
    else{
      item_temp={
        cantidad:1,
        id:f.id,
        img:f.img,
        title:f.title,
        precio:f.precio
      }

    }
  
    this.setState({
      cart:[...erase_temp, item_temp],
      total: this.state.total + f.precio
    });
  }

  deleteProduct=(i)=>{
    let buscado = this.state.cart.find(e=>e.id===i.id)
    let item_temp
    let erase_temp = this.state.cart
    
    if(buscado.cantidad>1){
      item_temp={
        cantidad: buscado.cantidad - 1,
        img:i.img,
        id:i.id,
        title:i.title,
        precio:i.precio
      }
      erase_temp = this.state.cart.filter((e)=>e.id!==i.id)
      this.setState({
        cart:[item_temp,...erase_temp],
        total: this.state.total - i.precio
      });
    }
    else{
      erase_temp = this.state.cart.filter((e)=>e.id!==i.id)
      this.setState({
        cart:[...erase_temp],
        total: this.state.total - i.precio
      });
    }
  }

  deleteCar=()=>{
    if (this.state.total === 0){
    }
    else{
      this.setState({
        cart:[],
        total: 0
      });
    }

  }  

  render(){
    this.state.cart.sort((a,b)=>a.id-b.id)
    return (
      <div className="App">
        <Header />    
        <div className="Containers">
          <Productos
            productList = {this.state.productList}
            agregar = {this.addProduct}
          />
          <Listado
            lista={this.state.cart}
            Total={this.state.total}
            deleteProduct={this.deleteProduct}
            deleteCar={this.deleteCar}
          />
        </div>
      </div>
    );
  }
}
export default App;
