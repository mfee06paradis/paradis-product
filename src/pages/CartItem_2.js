import React from "react";
import { Modal, Row, Col, Carousel, ListGroup, Card } from "react-bootstrap";

import "../css/CartItem.css";
import { IoMdClose } from "react-icons/io";

const CartItem = (props) => {
  const listgroup = ["sm", "md", "lg", "xl"].map((breakpoint, idx) => (
    <ListGroup variant="flush" horizontal={breakpoint} key={idx}>
      <ListGroup.Item style={{ borderWidth: 0 }}>
        <div style={{ maxWidth: 150 + "px", width: 150 + "px" }}>
          <img
            className="img-fluid"
            src="https://via.placeholder.com/300x300"
            alt="..."
          />
        </div>
      </ListGroup.Item>

      <ListGroup.Item className="list_group_name flex_wrap">
        <div>
          <div style={{ paddingBottom: 20 + "px" }}>
            EL SEED聯名系列 超激光炫彩餅
          </div>
          <h6>YSL BEAUTY</h6>
        </div>
      </ListGroup.Item>

      <ListGroup.Item className="list_group_other flex_wrap">
        <div>NT.500</div>
      </ListGroup.Item>
      <ListGroup.Item className="list_group_other flex_wrap">
        <div>
          <input
            type="number"
            className="form-control input_number"
            defaultValue="1"
            min={1}
            max={100}
          />
        </div>
      </ListGroup.Item>
      <ListGroup.Item className="list_group_other flex_wrap">
        <div>NT.1000</div>
      </ListGroup.Item>
      <ListGroup.Item className="list_group_last flex_wrap_last">
        <div>
          <IoMdClose size={1.5+"em"} color={"#BABABA"}>
            <button type="button"></button>
          </IoMdClose>
        </div>
      </ListGroup.Item>
    </ListGroup>
  ));

  return listgroup;
};

export default CartItem;
