import React from 'react'
import './Header.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
   <div className='header'>
    <h1 className='shop-head'>Shoppy</h1>
    <div className='search'><input className='s-input' type='search'placeholder='search product....'/> <div className='s-icon'><SearchIcon /></div></div>
    <Link to="/cartpage"  style={{ textDecoration: 'none', color: 'inherit' }}>
    <ShoppingCartIcon style={{ fontSize: '6vh' }} />
      </Link>
   </div>
  )
}

export default Header