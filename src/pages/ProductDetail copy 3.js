import React from "react";
import {
  Modal,
  Row,
  Col,
  Carousel,
  Accordion,
  Card,
  Container,
} from "react-bootstrap";

import "../css/product.css";

function ProductDetail() {
  return (
    <>
      <div className="">
        <div className="row">
          <div className="col-2"></div>

          <div className="col-8 header">
            <div className="row p_detail_wrap">
              <div className="col-6 p_detail">
                <div className="">
                  <h5 className="card-title">YSL BEAUTY</h5>
                  <h5 className="card-title">EL SEED聯名系列 超激光炫彩餅</h5>
                  <h5 className="card-title">
                    EXTRA DIMENSION SKINFINISH/ EL SEED
                  </h5>

                  <div className="">
                    <select className="form-control color_style">
                      <option value="volvo">STARS ALIGN</option>
                      <option value="saab">WISHFUL THINKING</option>
                      <option value="saab">SWING ON A STAR</option>
                    </select>
                  </div>
                  <h5 className="card-title">NT $1360</h5>
                  <div className="">
                    <input
                      type="number"
                      className="form-control input_number"
                      value="1"
                      min="1"
                      max="100"
                    />
                  </div>
                  <div className="">
                    <button type="button" className="btn btn-success">
                      加入購物車
                    </button>
                  </div>

                  <Accordion defaultActiveKey="0">
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="0">
                        商品介紹
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>Hello! I'm the body</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="1">
                        商品特色
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>Hello! I'm another body</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="2">
                        使用方法
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body>Hello! I'm another body</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
                <div></div>
              </div>

              <div className="col-6 p_detail">
                <div className="">
                  <div className="">
                    <button className="m-0 mr-4">最新</button>
                    <button className="m-0">最愛</button>
                  </div>
                  {/* 大圖輪播 */}
                  <div className="">
                    <Carousel>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="https://via.placeholder.com/250x150"
                          alt="First slide"
                        />
                        <Carousel.Caption></Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="https://via.placeholder.com/250x150"
                          alt="Third slide"
                        />

                        <Carousel.Caption></Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="https://via.placeholder.com/250x150"
                          alt="Third slide"
                        />

                        <Carousel.Caption></Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>
                  </div>
                  {/* 小圖輪播 */}
                  <div className="">
                    <Carousel indicators={false}>
                      <Carousel.Item>
                        <Container>
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
                              <Card.Img
                                variant="top"
                                src="https://via.placeholder.com/250x150"
                              />
                            </Col>
                            <Col sm={12} md={4}>
                              <Card.Img
                                variant="top"
                                src="https://via.placeholder.com/250x150"
                              />
                            </Col>
                          </Row>
                        </Container>

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
                            <Card.Img
                              variant="top"
                              src="https://via.placeholder.com/250x150"
                            />
                          </Col>
                          <Col sm={12} md={4}>
                            <Card.Img
                              variant="top"
                              src="https://via.placeholder.com/250x150"
                            />
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
                            <Card.Img
                              variant="top"
                              src="https://via.placeholder.com/250x150"
                            />
                          </Col>
                          <Col sm={12} md={4}>
                            <Card.Img
                              variant="top"
                              src="https://via.placeholder.com/250x150"
                            />
                          </Col>
                        </Row>
                        <Carousel.Caption></Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </div>
                <div className=""></div>

                <div className="" style={{ height: 150 }}></div>
              </div>
            </div>

            
            <div className="">
            
            </div>
          </div>
          <div className="col-2"></div>
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
