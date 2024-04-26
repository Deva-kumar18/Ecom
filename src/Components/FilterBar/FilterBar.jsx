import React, { useRef, useState } from 'react';
import './FilterBar.css'
import { useDispatch } from 'react-redux';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import { filterByCategory ,filterByPriceRange,filterByPrice} from '../../Redux/Features/cartSlice';

const FilterBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const initialClassName = isActive ? 'box-active' : 'box';

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(20000);

  const dispatch = useDispatch();
  const handleClick = () => {
    setIsActive(!isActive);

  };


  const sidebarRef = useRef(null);

  const handleCheckboxChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedCategories);
    dispatch(filterByCategory({ categories: updatedCategories }));
  };


  const [price, setPrice] = useState('');

  const handleApplyPriceFilter = () => {
    dispatch(filterByPriceRange({ minPrice, maxPrice }));
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(parseInt(e.target.value));
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(parseInt(e.target.value));
  };
    
  const handlePriceFilter = () => {
 
    dispatch(filterByPrice({ price: parseFloat(price) }));
  };



  return (
    <div>
      <div className='icon' onClick={() => { handleClick(); }} >
        {isActive ? <CloseIcon /> : <DehazeIcon />}
      </div>
      <div className={initialClassName} ref={sidebarRef}>
        <div className='fby-c-container'>
          <h4>Filter By Catagory</h4>
          <label>
            <input className='fby-category' type="checkbox" checked={selectedCategories.includes("Airpods")} onChange={() => { handleCheckboxChange("Airpods") }} />
            Airpods
          </label>
          <label>
            <input className='fby-category' type="checkbox" checked={selectedCategories.includes("Camera")} onChange={() => { handleCheckboxChange("Camera") }} />
            Camera
          </label>
          <label>
            <input className='fby-category' type="checkbox" checked={selectedCategories.includes("Earphone")} onChange={() => { handleCheckboxChange("Earphone") }} />
            Earphones
          </label><label>
            <input className='fby-category' type="checkbox" checked={selectedCategories.includes("Mobile")} onChange={() => { handleCheckboxChange("Mobile") }} />
            Mobile
          </label>
          <label>
            <input className='fby-category' type="checkbox" checked={selectedCategories.includes("Mouse")} onChange={() => { handleCheckboxChange("Mouse") }} />
            Mouse
          </label>
          <label>
            <input className='fby-category' type="checkbox" checked={selectedCategories.includes("Trimmer")} onChange={() => { handleCheckboxChange("Trimmer") }} />
            Trimmers
          </label>
          <label>
            <input className='fby-category' type="checkbox" checked={selectedCategories.includes("Speaker")} onChange={() => { handleCheckboxChange("Speaker") }} />
            Speakers
          </label>
          <label>
            <input className='fby-category' type="checkbox" checked={selectedCategories.includes("Tv")} onChange={() => { handleCheckboxChange("Tv") }} />
            Tv
          </label>
          <label>
            <input className='fby-category' type="checkbox" checked={selectedCategories.includes("Watch")} onChange={() => { handleCheckboxChange("Watch") }} />
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
              onChange={handleMinPriceChange}
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
              onChange={handleMaxPriceChange}
            />
          </div>
          <button className='apply-btn' onClick={handleApplyPriceFilter} >Apply</button>
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
      <button className='apply-btn' onClick={handlePriceFilter}>Apply</button>
    </div>

      </div>

    </div>
  );
};

export default FilterBar;
