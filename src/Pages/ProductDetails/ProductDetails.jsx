import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Productdetails.css'

const ProductDetails = () => {
  const { id } = useParams();
  const products = useSelector(state => state.cart.products);
  const product = products.find(product => product.id === parseInt(id));

  return (
    <div className='container-fluid'>
      {product ? (
        <div className='d-container'>
            <div className='img-cont'>
            <p>{product.pname}</p><img className='p-image' src={product.image}/>
            </div>
            <div className='d-container'> 
            <img src={product.image}/> 
            <button>+</button><button>-</button>
            </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetails;

