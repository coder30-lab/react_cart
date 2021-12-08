
import React from "react";

import Cart from './Cart';
import Navbar from "./Navbar";

import firebase from 'firebase/app'
import 'firebase/firestore';
class App extends React.Component {
  constructor(){
    super()
    this.state={
     products:[],
     loading:true
    }
    this.db=firebase.firestore();
  }

  componentDidMount () {
       
      // firebase
      // .firestore()
      // .collection('products')
      // .get()
      // .then((snapshot)=>{
      //   console.log(snapshot);
      //   snapshot.docs.map((doc)=>{
      //     console.log(doc.data())
      //   });

      //   const products=snapshot.docs.map((doc)=>{
      //     const data=doc.data();
      //     data['id']=doc.id;  
          
      //     return data;//it will give an object
      //   })
      //   this.setState({ 
      //     products,
      //     loading:false
      //   })
      // })
       

      firebase
      .firestore()
      .collection('products')
      .onSnapshot((snapshot)=>{
        console.log(snapshot);
        snapshot.docs.map((doc)=>{
          console.log(doc.data())
        });

        const products=snapshot.docs.map((doc)=>{
          const data=doc.data();
          data['id']=doc.id;  
          
          return data;//it will give an object
        })
        this.setState({ 
          products,
          loading:false
        })
      })








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
    let cartTotal=0;
    products.map((product)=>{
      if(product.qty>0){
        cartTotal+=product.qty* product.price
      }
      return '';
    
    });
    return cartTotal;
  }
  addProduct=()=>{
this.db
.collection('products')
.add({
  img:'',
  price:900,
  qty:3,
  title:'washing machine'
})
.then((docRef)=>{
console.log('product has been added',docRef);
})
.catch((error)=>{
  console.log('Error',error);
})
  }
  render(){
    const{products,loading}=this.state;
    return (
      <div className="App">
       
       <Navbar count={this.getCartCount()}/>
       <button onClick={this.addProduct} style={{padding:25,fontSize:20}}>Add a Product</button>
       <Cart
       products={products}
        OnIncreaseQuantity={this.handleIncreaseQuantity}
        OnDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteQuantity={this.handleDeleteQuantity}
       
       
       />

       {loading && <h1>Loading Products....</h1>}
       <div style={{padding:10,fontSize:20}}>TOTAL:{this.getCartTotal()}</div>
      </div>
    );
  
  }
 }

export default App;
