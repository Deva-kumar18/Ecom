import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import FilterBar from '../../Components/FilterBar/FilterBar';
import { addToCart } from '../../Redux/Features/cartSlice'; 

const Home = () => {
  const products = useSelector(state => state.cart.products);
  const filteredProducts = useSelector(state => state.cart.filteredProducts);
  const productsToRender = filteredProducts.length > 0 ? filteredProducts : products;
  const dispatch = useDispatch();
  
 
  return (
    <div className='home container-fluid'>
      <Header />
      <FilterBar />
      <ul className='row row-cols-sm-4 row-cols-3 row-cols-md-6 h-10'>
        {productsToRender.map(product => (
          <li className='col-d mb-4 d-flex align-items-center p-design flex-column m-1' key={product.id}>
            <Link className='p-listing' to={`productdetails/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img className='img-fluid' src={product.image} alt={product.pname} />
              <h3 className='p-name'>{product.pname}</h3>
              <p className='p-price'>Price: ${product.price}</p>
            </Link>
            <button className='add-cart img-fluid d-flex justify-content-evenly p-1' onClick={() => dispatch(addToCart({ productId: product.id }))}>Add cart <AddShoppingCartIcon /></button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home