import React from "react";
const CartItem=(props)=>{

    const{title,price,qty}=props.product;
    const{product,OnIncreaseQuantity,OnDecreaseQuantity,onDeleteQuantity}=props;
    return(
      <div className="cart-item">
<div className="left-block">
  <img style={styles.image} alt="" src={product.img}/>
</div>
<div className="right-block">
  <div style={{fontSize:25}}>{title}</div>
  <div  style={{color:'#777'}}>RS :{price}</div>
  <div style={{color:'#777'}}>QTY :{qty}</div>
  <div className="cart-item-actions">{/*Buttons*/}
  <img 
  alt="increase" 
  className="action-icons" 
  src="https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1638591456~hmac=97dea63bee70452fd9d283a568f19944"
  onClick={()=>OnIncreaseQuantity(product)}
  />
  <img 
  alt="decrease" 
  className="action-icons" 
  src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
 
  onClick={()=>OnDecreaseQuantity(product)}
  />
  <img 
  alt="delete" 
  className="action-icons" 
  src="https://cdn-icons-png.flaticon.com/512/3221/3221897.png"
  
  onClick={()=>onDeleteQuantity(product.id)}
  />
  </div>
</div>
      </div>
    );

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