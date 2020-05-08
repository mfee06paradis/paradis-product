import React from "react";
import { Modal, Row, Col, Carousel, ListGroup, Card } from "react-bootstrap";

import "../css/CartItem.css";

const CartItem = (props) => {
  const listgroup = ["sm", "md", "lg", "xl"].map((breakpoint, idx) => (
    <ListGroup horizontal={breakpoint} key={idx}>
      <ListGroup.Item>
        <div style={{ maxWidth: 150 + "px" , width: 150 + "px" }}>
          <img
            className="img-fluid"
            src="https://via.placeholder.com/300x300"
            alt="..."
          />
        </div>
      </ListGroup.Item>
      <ListGroup className="list_group_name">
        <div>{props.name}</div>
        <div>{props.company}</div>
      </ListGroup>
      <ListGroup.Item className="list_group_item">{props.unitPrice}</ListGroup.Item>
      <ListGroup.Item className="list_group_item">{props.amount}</ListGroup.Item>
      <ListGroup.Item className="list_group_item">{props.total}</ListGroup.Item>
    </ListGroup>
  ));

  return listgroup;
  
};

export default CartItem;
