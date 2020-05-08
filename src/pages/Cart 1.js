import React, {Component} from "react";
import { Modal, Row, Col, Carousel, ListGroup } from "react-bootstrap";
import CartItem from './CartItem'

class Cart extends Component {

  constructor(props){
    super(props);
  }

  state = {
    cardItems:[
      {id:'id1', name:'Name1', unitPrice:'unitPrice', amount:'amount', total:'total'},
      {id:'id2', name:'Name2', unitPrice:'unitPrice', amount:'amount', total:'total'},
      {id:'id3', name:'Name3', unitPrice:'unitPrice', amount:'amount', total:'total'}
    ]
  }


  
  render(){
    return(
    <>


      {this.state.cardItems.map((item, idx)=>{
        return <CartItem 
          name={item.name}
          unitPrice={item.unitPrice}
          amount={item.amount}
          total={item.total}
        />
      })}


    </>
    )
  }
}

export default Cart;
