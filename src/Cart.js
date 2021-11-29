import React from "react";
import CartItem from './CartItem';
class Cart extends React.Component{
  constructor(){
    super()
    this.state={
     products:[
       {
        price:999,
        title:'Watch',
        qty:1,
        img:' ',
        id:1    
       },
       {
        price:999,
        title:'Mobile phone',
        qty:10,
        img:' ',
        id:2
       },
       {
        price:999,
        title:'Macbook',
        qty:6,
        img:' ',
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

  handleDeleteQuantity=(id)=>{
    const {products}=this.state;
    const items=products.filter((itme)=>itme.id!==id);
    this.setState({
      products:items
    })
  }

 render(){
   const {products}=this.state;
   return(
<div className="cart">
  
  {products.map((product)=>{
    return<CartItem product={product}
     key={product.id}
     OnIncreaseQuantity={this.handleIncreaseQuantity}
     OnDecreaseQuantity={this.handleDecreaseQuantity}
     onDeleteQuantity={this.handleDeleteQuantity}
     />
  })}
</div>
   );
 }

}

export default Cart;