import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countAdd ,countLess,removeItem} from '../../Redux/Features/cartSlice';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './CartPage.css';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.cart.items);
  console.log(cartItems)
  const dispatch = useDispatch()

  return (
    <div className='c-page'>
      {cartItems.length === 0 ? (
        <p className='e-c-a'>Your cart is empty.</p>
      ) : (
        <div>
          <ul className='p-unset'>
            {cartItems.map(item => (
              <li className='cart-products row-cols-4 d-flex align-items-center justify-content-between align-content-center ' key={item.id}><img className='c-p-image ' src={item.image}/><div  className='p-cont'><p className='p-details'>{item.pname}</p>
              <p className='p-details'>Price: ${item.price}</p>
              <button className='remove-btn' onClick={()=>dispatch(removeItem({id:item.id}))}>remove</button>
              </div>
              <div className='btn-cont'><ArrowBackIosNewIcon onClick={()=>dispatch(countLess({id:item.id}))} />{item.count}<ArrowForwardIosIcon onClick={()=>dispatch(countAdd({id:item.id}))} /></div>
              </li>
             
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CartPage;
