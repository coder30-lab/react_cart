
import React from "react";

import Cart from './Cart';
import Navbar from "./Navbar";
class App extends React.Component {
  constructor(){
    super()
    this.state={
     products:[
       {
        price:999,
        title:'Watch',
        qty:1,
        img:'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        id:1    
       },
       {
        price:999,
        title:'Mobile phone',
        qty:10,
        img:'https://images.unsplash.com/photo-1619017098958-57b1e2d275e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
        id:2
       },
       {
        price:999,
        title:'Macbook',
        qty:6,
        img:'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 ',
        id:3
       }
     ]
    }
  }
  handleIncreaseQuantity=(product)=>{
    const {products}=this.state;
    const index=products.indexOf(product);
    products[index].qty +=1;
    this.setState({
      products:products
    })
    console.log('Hey please inc the quantity',product);
  }
  handleDecreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products
    })
  }
  handleDeleteQuantity=(id)=>{
    const {products}=this.state;
    const items=products.filter((itme)=>itme.id!==id);
    this.setState({
      products:items
    })
  }
  getCartCount=()=>{
    const {products}=this.state;
    let count=0;
products.forEach((products)=>{
  count+=products.qty;
})

     return count;
  }


  getCartTotal=()=>{
    const {products}=this.state;
    let amt=0;
    products.map((product)=>{
      amt+=product.qty* product.price
    })
    return amt;
  }

  render(){
    const{products}=this.state;
    return (
      <div className="App">
       
       <Navbar count={this.getCartCount()}/>
       <Cart
       products={products}
        OnIncreaseQuantity={this.handleIncreaseQuantity}
        OnDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteQuantity={this.handleDeleteQuantity}
       
       
       />
       <div style={{padding:10,fontSize:20}}>TOTAL:{this.getCartTotal()}</div>
      </div>
    );
  
  }
 }

export default App;
