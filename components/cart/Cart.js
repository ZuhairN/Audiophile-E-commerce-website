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
            <AiOutlineShoppingCart className='Cart__logo' onClick={toggle} />
            {cart.length ? <div className='Cart__num'>{totalQty < 10 ? totalQty : '9+'}</div> : null}
            <div className={`Cart__details ${isExpanded ? 'active' : ''}`}>
                <CartSummary collapse={collapse} isControlled />
            </div>
            <LightBox isExpanded={isExpanded} collapse={collapse} />
        </div>
    )
}
