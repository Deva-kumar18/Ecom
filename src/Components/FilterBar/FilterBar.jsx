import React, { useRef, useState } from 'react';
import './FilterBar.css'
import { useDispatch } from 'react-redux';
import { toggleFilter } from '../../Redux/Features/cartSlice'
import SearchIcon from '@mui/icons-material/Search';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';

const YourComponent = () => {
  const [isActive, setIsActive] = useState(false);
  const initialClassName = isActive ? 'box-active' : 'box'; 
 
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);

  const dispatch = useDispatch();
  const handleClick = () => {
    setIsActive(!isActive); 
    
  };

  const sidebarRef = useRef(null);

  const shiftFocusToSidebar = () => {
    if (sidebarRef.current) {
      sidebarRef.current.focus();
    }
  };

  const [price, setPrice] = useState('');

  const handleFilterByPrice = () => {
    
  };

  return (
    <div>
      <div className='icon' onClick={()=>{handleClick();}} >
       {isActive?<CloseIcon/>:<DehazeIcon/>}
      </div>
      <div className={initialClassName}  ref={sidebarRef}>
        <div className='fby-c-container'>
       
            <h4>Filter By Catagory</h4>
      <label>
        <input className='fby-category' type="checkbox"  />
        Airpods
      </label>
      <label>
        <input className='fby-category' type="checkbox" />
        Camera
      </label>
      <label>
        <input className='fby-category' type="checkbox" />
        Earphones
      </label><label>
        <input className='fby-category' type="checkbox" />
        Mobile
      </label>
      <label>
        <input className='fby-category' type="checkbox" />
        Mouse
      </label>
      <label>
        <input className='fby-category' type="checkbox" />
        Trimmers
      </label>
      <label>
        <input className='fby-category' type="checkbox" />
        Speakers
      </label>
      <label>
        <input className='fby-category' type="checkbox" />
        Tv
      </label>
      <label>
        <input className='fby-category' type="checkbox" />
        Watchs
      </label>
      </div>
      <div className='p-range-container'>
        <h4>By Price Range</h4>
      <div className='fby-p-range' >

        <label>Min Price: ${minPrice}</label>
        <input 
        className='range-input'
          type="range" 
          min="0" 
          max={maxPrice} 
          value={minPrice} 
          onChange={(e) => setMinPrice(parseInt(e.target.value))} 
        />
      </div>
      <div className='fby-p-range'>
        <label>Max Price: ${maxPrice}</label>
        <input 
        className='range-input'
          type="range" 
          min={minPrice} 
          max="10000" 
          value={maxPrice} 
          onChange={(e) => setMaxPrice(parseInt(e.target.value))} 
        />
      </div>
      <button className='apply-btn' >Apply</button>
    </div> 
    <div className='by-price'>
        <h4>By Price</h4>
      <div className='by-p-flex'>
        <label>Enter Price:</label>
        <input 
          type="number" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
        />
      </div>
      <button className='apply-btn'>Apply</button>
    </div>
   
      </div>
     
    </div>
  );
};

export default YourComponent;
