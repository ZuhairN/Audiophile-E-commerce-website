import { useContext } from 'react';
import { CartContext } from 'logic/cart.context';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import useToggle from 'logic/useToggle';
import CartSummary from './CartSummary';
import LightBox from 'components/shared/LightBox';


export default function Cart() {
    const cart = useContext(CartContext);
    const [isExpanded, toggle, collapse] = useToggle(false);
    const totalQty = cart.reduce((total, { qty }) => total + qty, 0);


    return (
        <div className='Cart'>
            <button type='button' className='Cart__btn' onClick={toggle} aria-label='Cart' onMouseUp={e => e.target.blur()}><AiOutlineShoppingCart className='Cart__logo' /></button>
            {cart.length ? <div className='Cart__num'>{totalQty < 10 ? totalQty : '9+'}</div> : null}
            <div className={`Cart__details ${isExpanded ? 'active' : ''}`}>
                <CartSummary collapse={collapse} isControlled />
            </div>
            <LightBox isExpanded={isExpanded} collapse={collapse} />
        </div>
    )
}
