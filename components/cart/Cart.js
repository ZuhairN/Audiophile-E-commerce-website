import { useContext } from 'react';
import { CartContext, DispatchContext } from 'logic/cart.context';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Btn from '../shared/Btn';
import CartItem from './CartItem';
import useToggle from 'logic/useToggle';


export default function Cart() {
    const cart = useContext(CartContext);
    const dispatch = useContext(DispatchContext);
    const [isExpanded, toggle, collapse] = useToggle(false)
    const reset = () => dispatch({ type: 'reset' });

    const sum = {
        totalQty: cart.reduce((total, { qty }) => total + qty, 0),
        totalPrice: cart.reduce((total, { qty, price }) => total + qty * price, 0)
    };

    return (
        <div className='Cart'>
            <AiOutlineShoppingCart className='Cart__logo' onClick={toggle} />
            {cart.length ? <div className='Cart__num'>{sum.totalQty < 10 ? sum.totalQty : '9+'}</div> : null}
            <div className={`Cart__details ${isExpanded ? 'active' : ''}`}>
                {!cart.length ?
                    (<>
                        <p className='para--dark'>Your Cart is empty</p>
                        <AiOutlineShoppingCart className='Cart__details__logo' />
                    </>)
                    :
                    (<>
                        <div className='Cart__title'>
                            <h4 className='heading--4'>CART({sum.totalQty})</h4>
                            <button onClick={reset}>Remove all</button>
                        </div>
                        {cart.map(item => <CartItem key={item.id} {...item} isControlled />)}
                        <div className='Cart__totalPrice'>
                            <span>TOTAL</span>
                            <h4 className='heading--4'>$ {sum.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h4>
                        </div>
                        <div className='Cart__checkout' onClick={collapse}>
                            <Btn cls='orange' href='/checkout' text='CHECKOUT' />
                        </div>
                    </>)
                }
            </div>
            <div className={`Cart__lightbox ${isExpanded ? 'active' : ''}`} onClick={collapse}></div>
        </div>
    )
}
