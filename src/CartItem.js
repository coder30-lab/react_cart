import React from "react";
class CartItem extends React.Component{

  render(){
    console.log('this.props',this.props);
    const{title,price,qty}=this.props.product;
    const{product,OnIncreaseQuantity,OnDecreaseQuantity,onDeleteQuantity}=this.props;
    return(
      <div className="cart-item">
<div className="left-block">
  <img style={styles.image}/>
</div>
<div className="right-block">
  <div style={{fontSize:25}}>{title}</div>
  <div  style={{color:'#777'}}>RS :{price}</div>
  <div style={{color:'#777'}}>QTY :{qty}</div>
  <div className="cart-item-actions">{/*Buttons*/}
  <img 
  alt="increase" 
  className="action-icons" 
  srx="https://image.flaticon.com/icons/svg/992/992651.svg"
  onClick={()=>OnIncreaseQuantity(product)}
  />
  <img 
  alt="decrease" 
  className="action-icons" 
  srx="https://image.flaticon.com/icons/svg/1665/1665612.svg"
 
  onClick={()=>OnDecreaseQuantity(product)}
  />
  <img 
  alt="delete" 
  className="action-icons" 
  srx="https://image.flaticon.com/icons/svg/1214/1214428.svg"
  
  onClick={()=>onDeleteQuantity(product.id)}
  />
  </div>
</div>
      </div>
    );
  }
}
const styles={
  image:{
    height:100,
    width:110,
    borderRadius:4,
    background:'#ccc'
  }
}
export default CartItem;