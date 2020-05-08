import React, { useState } from "react";
import {
  Modal,
  Row,
  Col,
  Carousel,
  Accordion,
  Card,
  Container,
  Button,
} from "react-bootstrap";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";


import Star from "./Star"

import "../css/product.css";
import "../css/star.scss";

// ============= 彈出式視窗 =======================
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="modal-context">
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
          <div className="sub-title">
            <p className="sub-title-eng">撰寫評論</p>
            <p className="sub-title-chs">Write a review</p>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p style={{ margin: 0 }}>你的評價</p>
          </div>
          <div style={{ marginBottom: 20 + "px" }}>
            <Star/>
          </div>

          <div class="form-group">
            <label htmlFor="exampleFormControlTextarea1">你的使用心得</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="6"
            ></textarea>
          </div>

          <button className="btn-green margin-btn-left" onClick={props.onHide}>
            取消
          </button>
          <button className="btn-main margin-btn-right" onClick={props.onHide}>
            確定
          </button>
          <br></br>
        </Modal.Body>
      </div>
    </Modal>
  );
}

function ProductDetail() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="">
        <div className="bg-pink">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8 p_detail_outer">
              <div className="context-full p_detail_customOut">
                <div className="context-full-before"></div>
                <div className="context-full-mid">
                  <div className="row p_detail_wrap">
                    <div className="col-6 p_detail">
                      <div className="">
                        <h6 className="card-title">YSL BEAUTY</h6>
                        <p className="card-title">
                          EL SEED聯名系列 超激光炫彩餅 EXTRA DIMENSION
                          SKINFINISH/ EL SEED
                        </p>

                        <div className="" style={{width:60+"%"}}>
                          <select className="form-control color_style">
                            <option value="volvo">STARS ALIGN</option>
                            <option value="saab">WISHFUL THINKING</option>
                            <option value="saab">SWING ON A STAR</option>
                          </select>
                        </div>
                        <div className="main-title">
                          <h2
                            className="card-title unitprice_title"
                            style={{
                              margin: 20 + "px",
                              marginLeft: 0,
                              marginRight: 0,
                              textAlign:"left"
                            }}
                          >
                            NT $1360
                          </h2>
                        </div>
                        <div>
                          <input
                            type="number"
                            className="form-control input_number"
                            defaultValue="1"
                            min={1}
                            max={100}
                          />
                        </div>
                        <div className="">
                          <button className="btn-white ml-0">加入購物車</button>
                        </div>
                      </div>
                      <div style={{height:300+"px"}}>
                        <Accordion defaultActiveKey="0">
                          <Card>
                            <Accordion.Toggle
                              as={Card.Header}
                              eventKey="0"
                              className="text_accordion pl-0"
                            >
                              商品介紹
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                              <Card.Body className=" pl-0">
                                此粉餅能定妝並美化底妝，打造平滑無瑕的妝感。這款清透的粉餅100%無油且能吸油，
                                含有維他命Ｅ，使用起來更舒適。內附粉撲。配方不含對羥基苯甲酸酯、鄰苯二甲酸酯
                                、硫酸鹽、亞硫酸鹽；無麩質、全素。
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                          <Card>
                            <Accordion.Toggle
                              as={Card.Header}
                              eventKey="1"
                              className="text_accordion pl-0"
                            >
                              商品特色
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                              <Card.Body className=" pl-0">
                                獨特的黃色底色能襯托出所有膚色，打造自然氣色，連在粉紅膚色上也依舊看起來很自然。
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                          <Card>
                            <Accordion.Toggle
                              as={Card.Header}
                              eventKey="2"
                              className="text_accordion pl-0"
                            >
                              使用方式
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                              <Card.Body className=" pl-0">
                                用內附粉撲按壓蜜粉，輕輕拍在臉上，特別注意容易泛油光的部位。一天根據需求補妝，以吸收過多的油光。
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        </Accordion>
                      </div>
                    </div>

                    <div className="col-6 p_detail">
                      <div className="">
                        <button className="m-0 p-0">最新</button>
                        <button className="m-0 p-0" style={{ float: "right" }}>
                          最愛
                        </button>
                      </div>
                      {/* 大圖輪播 */}
                      <div className="" style={{ padding: 0 }}>
                        <Carousel>
                          <Carousel.Item>
                            <div>
                              <img
                                className="img-fluid d-block w-100"
                                src="https://via.placeholder.com/250x150"
                                alt="First slide"
                              />
                            </div>
                            <Carousel.Caption></Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="img-fluid d-block w-100"
                              src="https://via.placeholder.com/250x150"
                              alt="Third slide"
                            />

                            <Carousel.Caption></Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="img-fluid d-block w-100"
                              src="https://via.placeholder.com/250x150"
                              alt="Third slide"
                            />

                            <Carousel.Caption></Carousel.Caption>
                          </Carousel.Item>
                        </Carousel>
                      </div>
                      {/* 小圖輪播 */}
                      <div className="" style={{ marginTop: 30 + "px" }}>
                        <Carousel indicators={false}>
                          <Carousel.Item>
                            <Row>
                              <Col sm={12} md={4}>
                                <Card>
                                  <Card.Img
                                    variant="top"
                                    src="https://via.placeholder.com/250x150"
                                  />
                                </Card>
                              </Col>
                              <Col sm={12} md={4}>
                                <Card>
                                  <Card.Img
                                    variant="top"
                                    src="https://via.placeholder.com/250x150"
                                  />
                                </Card>
                              </Col>
                              <Col sm={12} md={4}>
                                <Card>
                                  <Card.Img
                                    variant="top"
                                    src="https://via.placeholder.com/250x150"
                                  />
                                </Card>
                              </Col>
                            </Row>

                            <Carousel.Caption></Carousel.Caption>
                          </Carousel.Item>

                          <Carousel.Item>
                            <Row>
                              <Col sm={12} md={4}>
                                <Card>
                                  <Card.Img
                                    variant="top"
                                    src="https://via.placeholder.com/250x150"
                                  />
                                </Card>
                              </Col>
                              <Col sm={12} md={4}>
                                <Card>
                                  <Card.Img
                                    variant="top"
                                    src="https://via.placeholder.com/250x150"
                                  />
                                </Card>
                              </Col>
                              <Col sm={12} md={4}>
                                <Card>
                                  <Card.Img
                                    variant="top"
                                    src="https://via.placeholder.com/250x150"
                                  />
                                </Card>
                              </Col>
                            </Row>

                            <Carousel.Caption></Carousel.Caption>
                          </Carousel.Item>

                          <Carousel.Item>
                            <Row>
                              <Col sm={12} md={4}>
                                <Card>
                                  <Card.Img
                                    variant="top"
                                    src="https://via.placeholder.com/250x150"
                                  />
                                </Card>
                              </Col>
                              <Col sm={12} md={4}>
                                <Card>
                                  <Card.Img
                                    variant="top"
                                    src="https://via.placeholder.com/250x150"
                                  />
                                </Card>
                              </Col>
                              <Col sm={12} md={4}>
                                <Card>
                                  <Card.Img
                                    variant="top"
                                    src="https://via.placeholder.com/250x150"
                                  />
                                </Card>
                              </Col>
                            </Row>

                            <Carousel.Caption></Carousel.Caption>
                          </Carousel.Item>
                        </Carousel>
                      </div>
                      {/* 活動行銷 */}
                      <div className=""></div>
                    </div>
                  </div>
                  <hr className="hr-gold"></hr>
                  {/* 評論區塊 */}
                  <div className="">
                    {/* 投稿 */}
                    <div className="row">
                      <div className="col-6">
                        <h4 style={{ marginBottom: 5 + "px" }}>REVIVW</h4>
                        <h4>評論</h4>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                      </div>
                      <div className="col-6">
                        <MyVerticallyCenteredModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
                        <button
                          className="btn-pink"
                          style={{ float: "right" }}
                          onClick={() => setModalShow(true)}
                        >
                          投稿
                        </button>
                      </div>
                    </div>

                    {/* 相關評論 */}

                    <div
                      className="main-title"
                      style={{ marginBottom: 40 + "px", marginTop: 40 + "px" }}
                    >
                      <h2 style={{ marginBottom: 5 + "px" }}>OTHER COMMENTS</h2>
                      <h4>其他評論</h4>
                    </div>
                    <div className="comment_height overflow-auto" style={{maxHeight:540+"px"}}>
                      <div class="media border p-3">
                        <div
                          style={{ width: 100 + "px", paddingRight: 16 + "px" }}
                        >
                          <img
                            src="https://via.placeholder.com/250x150"
                            alt="John Doe"
                            class="img-fluid mr-3 mt-3 rounded-circle"
                          />
                        </div>
                        <div
                          class="media-body overflow-auto"
                          style={{ maxHeight: 150 + "px" }}
                        >
                          <h5>
                            John Doe{" "}
                            <small>
                              <i>Posted on February 19, 2016</i>
                            </small>
                          </h5>
                          <div class="">aaa</div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </p>
                        </div>
                      </div>
                      <div class="media border p-3">
                        <div
                          style={{ width: 100 + "px", paddingRight: 16 + "px" }}
                        >
                          <img
                            src="https://via.placeholder.com/250x150"
                            alt="John Doe"
                            class="img-fluid mr-3 mt-3 rounded-circle"
                          />
                        </div>
                        <div
                          class="media-body overflow-auto"
                          style={{ maxHeight: 150 + "px" }}
                        >
                          <h5>
                            John Doe{" "}
                            <small>
                              <i>Posted on February 19, 2016</i>
                            </small>
                          </h5>
                          <div class="">aaa</div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </p>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="context-full-after"></div>
              </div>
            </div>

            <div className="col-2"></div>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;

// import React from 'react'
// import Banner from '../components/Banner'
// import { withRouter } from 'react-router-dom'

// function Product(props) {
//   //利用props中的location search得到搜尋字串
//   console.log(props)

//   //用document.location.search得到搜尋字串
//   console.log(document.location.search)

//   // 產生一個新的URLSearchParams實例
//   const searchParams = new URLSearchParams(props.location.search)

//   return (
//     <>
//       <Banner pagename="產品" />
//       {/* 用get來得到每個搜尋字屬的參數 */}
//       <h2>id: {searchParams.get('id')}</h2>
//       <h2>type: {searchParams.get('type')}</h2>
//     </>
//   )
// }

// export default withRouter(Product)
