import React from 'react'

function Product() {
  return (
  <>
      <div className="row">
            <div className="col-2"></div>
            <div className="col-8 buttonDiv">
               
            </div>
            <div className="col-2"></div>

            <div className="col-2"></div>
            <div className="col-8">
                <div className="row product_wrap">
                    <div className="col-4 product">
                        <div className="card">
                            <div className="card_img_wrap">
                                <img className="card-img-top" src="/img/AFGHAN RED.jpg" alt="Card image cap"/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">YSL BEAUTY</h5>
                                <h5 className="card-title">EL SEED聯名系列 超激光炫彩餅</h5>
                                <h5 className="card-title">EXTRA DIMENSION SKINFINISH/ EL SEED</h5>
                                <p className="card-text">NT.500</p>
                                <a href="#">
                                    <button className="btn btn-primary">加入購物車</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 product">
                        <div className="card">
                            <div className="card_img_wrap">
                                <img className="card-img-top" src="/img/AFGHAN RED.jpg" alt="Card image cap"/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">YSL BEAUTY</h5>
                                <h5 className="card-title">EL SEED聯名系列 超激光炫彩餅</h5>
                                <h5 className="card-title">EXTRA DIMENSION SKINFINISH/ EL SEED</h5>
                                <p className="card-text">NT.500</p>
                                <a href="#">
                                    <button className="btn btn-primary">加入購物車</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 product">
                        <div className="card">
                            <div className="card_img_wrap">
                                <img className="card-img-top" src="/img/AFGHAN RED.jpg" alt="Card image cap"/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">YSL BEAUTY</h5>
                                <h5 className="card-title">EL SEED聯名系列 超激光炫彩餅</h5>
                                <h5 className="card-title">EXTRA DIMENSION SKINFINISH/ EL SEED</h5>
                                <p className="card-text">NT.500</p>
                                <a href="#">
                                    <button className="btn btn-primary">加入購物車</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-2"></div>
            </div>
     </>
     )
}

export default Product

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
