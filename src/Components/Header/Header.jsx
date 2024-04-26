import React, { useState } from 'react';
import './Header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { filterByName } from '../../Redux/Features/cartSlice';

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    dispatch(filterByName({ query: query.trim() }));
  };

  return (
    <div className='header'>
      <h1 className='shop-head'>Shoppy</h1>
      <div className='search'>
        <input
          className='s-input'
          type='search'
          placeholder='Search product....'
          value={searchQuery}
          onChange={handleSearch}
        />
        <div className='s-icon'>
          <SearchIcon />
        </div>
      </div>
      <ShoppingCartIcon style={{ fontSize: '6vh' }} />
    </div>
  );
};

export default Header;
