import React from "react";
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

import "../css/product.css";

function ProductDetail() {
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

                        <div className="">
                          <select className="form-control color_style">
                            <option value="volvo">STARS ALIGN</option>
                            <option value="saab">WISHFUL THINKING</option>
                            <option value="saab">SWING ON A STAR</option>
                          </select>
                        </div>
                        <h5
                          className="card-title"
                          style={{
                            margin: 20 + "px",
                            marginLeft: 0,
                            marginRight: 0,
                          }}
                        >
                          NT $1360
                        </h5>
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
                          <button className="ml-0">加入購物車</button>
                        </div>
                      </div>
                      <div>
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
                        <p style={{ marginBottom: 5 + "px" }}>REVIVW</p>
                        <p>投稿</p>
                      </div>
                      <div className="col-6">
                        <button className="btn-pink" style={{ float: "right" }}>
                          投稿
                        </button>
                      </div>
                    </div>

                    {/* 評論輪播 */}
                    <Carousel indicators={false}>

                      <Carousel.Item>
                        <Row>
                          <Col sm={12} md={4}>
                            <Card>
                              <Card.Body>
                                <Card.Title>star</Card.Title>
                                <Card.Text>
                                  這是評論這是評論這是評論這是評論這是評論這是評論這是評論
                                  這是評論這是評論這是評論這是評論這是評論這是評論
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                          <Col sm={12} md={4}>
                            <Card>
                              <Card.Body>
                                <Card.Title>star</Card.Title>
                                <Card.Text>
                                  這是評論這是評論這是評論這是評論這是評論這是評論這是評論
                                  這是評論這是評論這是評論這是評論這是評論這是評論
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                          <Col sm={12} md={4}>
                            <Card>
                              <Card.Body>
                                <Card.Title>star</Card.Title>
                                <Card.Text>
                                  這是評論這是評論這是評論這是評論這是評論這是評論這是評論
                                  這是評論這是評論這是評論這是評論這是評論這是評論
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                        <Carousel.Caption></Carousel.Caption>
                      </Carousel.Item>

                      <Carousel.Item>
                        <Row>
                          <Col sm={12} md={4}>
                            <Card>
                              <Card.Body>
                                <Card.Title>star</Card.Title>
                                <Card.Text>
                                  這是評論這是評論這是評論這是評論這是評論這是評論這是評論
                                  這是評論這是評論這是評論這是評論這是評論這是評論
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                          <Col sm={12} md={4}>
                            <Card>
                              <Card.Body>
                                <Card.Title>star</Card.Title>
                                <Card.Text>
                                  這是評論這是評論這是評論這是評論這是評論這是評論這是評論
                                  這是評論這是評論這是評論這是評論這是評論這是評論222
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                          <Col sm={12} md={4}>
                            <Card>
                              <Card.Body>
                                <Card.Title>star</Card.Title>
                                <Card.Text>
                                  這是評論這是評論這是評論這是評論這是評論這是評論這是評論
                                  這是評論這是評論這是評論這是評論這是評論這是評論
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                        <Carousel.Caption></Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </div>
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
