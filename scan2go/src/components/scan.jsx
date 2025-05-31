import React, { useState, useEffect, useContext } from 'react';
import customerproductContext from '../context/customerproduct/CustomerProductContext';
import { Html5QrcodeScanner } from 'html5-qrcode';
import Customerproductitem from './customerproductitem';
import {useNavigate} from 'react-router-dom';

const QrScanner = () => {
  const navigate=useNavigate();
  const [qrCodeMessage, setQrCodeMessage] = useState('');
  const context = useContext(customerproductContext);

  const { getcustomerpurchase, getCustomerSeletedProducts } = context;
  const onScanSuccess = async (qrCodeMessage) => {
    setQrCodeMessage(qrCodeMessage);
    await getCustomerSeletedProducts(qrCodeMessage);
  }
  const product = {
    ProductType: getcustomerpurchase.Product_Type,
    ProductName: getcustomerpurchase.Product_Name,
    ProductPrice: getcustomerpurchase.Product_Price,
    ProductOffer: getcustomerpurchase.Product_Offer,
    ProductId: getcustomerpurchase._id
  }
  const onScanError = (errorMessage) => {
    //handle scan error
  }

  useEffect(() => {
    const html5QrcodeScanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
    html5QrcodeScanner.render(onScanSuccess, onScanError);
  }, []);
  const logout=()=>{
    localStorage.removeItem('_grecaptcha');
   navigate('/')
  }
  return (
    <div className='container-fluid'>
      <div className="row vh-100">
        <div className="col-md-5 border-end border-2 mt-5">
          <div className=''><div className='bg-light mt-5 text-dark' id="reader"></div></div>
        </div>
        <div className='col-md-7  mt-5 text-white'>
          <div className='h-75 overflow-y-scroll'>{<Customerproductitem key={product.ProductId} product={product} />}</div>
          <div className='d-flex justify-content-evenly align-items-center mt-2'>
            <button className='btn btn-lg btn-success'>Pay Amount</button>
            <button className='btn btn-lg btn-primary' onClick={logout}>Logout</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default QrScanner;
