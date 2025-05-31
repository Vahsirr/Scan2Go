import React, { useState } from 'react'

const Customerproductitem = (props) => {
  const { product } = props;
  return (
    <>
      <div className="card mt-5">
        <div className="row g-0 w-75">
          <div class="col-md-4">
            <img src="https://tse4.mm.bing.net/th?id=OIP.tt9srMxdvcVurG45H-stPAHaKS&pid=Api&P=0" class="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.ProductName}</h5>
              <p className="card-text">{product.ProductType}</p>
              <p className="card-text">{product.ProductPrice}</p>
              <p className='card-text'>{product.ProductOffer}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='fs-3 fw-semibold mt-3'>Total Amount : {product.ProductPrice}</div>

    </>
  )
}

export default Customerproductitem