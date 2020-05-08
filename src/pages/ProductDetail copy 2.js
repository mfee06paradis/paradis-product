import React from "react";

import { Modal, Row, Col, Carousel } from 'react-bootstrap'

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
                    <button>加入購物車</button>
                  </div>

                  <div
                    className="accordion accordion_height"
                    id="accordionExample"
                  >
                    <div className="card">
                      <div className="card-header pl-0" id="headingOne">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link no_padding no_margin"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            商品介紹
                          </button>
                        </h2>
                      </div>

                      <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body overflow-auto max_height pl-0"></div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header pl-0" id="headingTwo">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link  no_padding no_margin collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            商品特色
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body overflow-auto max_height pl-0"></div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header pl-0" id="headingThree">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link  no_padding no_margin collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            使用方法
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body overflow-auto max_height pl-0">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-6 p_detail">
                <div className="">
                  <div className="">
                    <button>最新</button>
                    <button>最愛</button>
                  </div>
                  <div className="">
                    <Carousel>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="https://via.placeholder.com/250x150"
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3>First slide label</h3>
                          <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="https://via.placeholder.com/250x150"
                          alt="Third slide"
                        />

                        <Carousel.Caption>
                          <h3>Second slide label</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="https://via.placeholder.com/250x150"
                          alt="Third slide"
                        />

                        <Carousel.Caption>
                          <h3>Third slide label</h3>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </div>
                <div class=""></div>

                <div className="" style={{ height: 150 }}></div>
              </div>
            </div>

            <div className=""></div>
            <div class=""></div>
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
