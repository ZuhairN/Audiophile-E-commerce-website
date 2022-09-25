import Btn from "components/shared/Btn";
import { CartContext, DispatchContext } from "logic/cart.context";
import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartItem from "./CartItem";

export default function CartSummary({ isControlled, collapse }) {
    const cart = useContext(CartContext);
    const dispatch = useContext(DispatchContext);
    const reset = () => dispatch({ type: 'reset' });
    const sum = {
        totalQty: cart.reduce((total, { qty }) => total + qty, 0),
        totalPrice: cart.reduce((total, { qty, price }) => total + qty * price, 0)
    };

    return (
        <div className='CartSummary'>
            {!cart.length ?
                (<>
                    <p className='para--dark'>Your Cart is empty</p>
                    <AiOutlineShoppingCart className='CartSummary__logo' />
                </>)
                :
                (<>
                    <div className='CartSummary__title'>
                        <h4 className='heading--4'>{isControlled ? `CART(${sum.totalQty})` : 'SUMMARY'}</h4>
                        {isControlled ? <button onClick={reset}>Remove all</button> : null}
                    </div>
                    {cart.map(item => <CartItem key={item.id} {...item} isControlled={isControlled} />)}
                    <div className='CartSummary__totalPrice'>
                        <div className='CartSummary__invoice'>
                            <span>TOTAL</span>
                            <h4 className='heading--4'>$ {sum.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h4>
                        </div>
                        {isControlled ? null :
                            <>
                                <div className='CartSummary__invoice'>
                                    <span>SHIPPING</span>
                                    <h4 className='heading--4'>$ 50</h4>
                                </div>
                                <div className='CartSummary__invoice'>
                                    <span>VAT (INCLUDED)</span>
                                    <h4 className='heading--4'>$ {Math.floor(sum.totalPrice * .2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h4>
                                </div>
                                <div className='CartSummary__invoice'>
                                    <span>GRAND TOTAL</span>
                                    <h4 className='heading--4'>$ {(sum.totalPrice + 50).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h4>
                                </div>
                            </>}
                    </div>
                    <div className='CartSummary__btn' onClick={isControlled ? collapse : reset}>
                        <Btn cls='orange' href={isControlled ? '/checkout' : '/'} text={isControlled ? 'CHECKOUT' : 'CONTINUE & PAY'} />
                    </div>
                </>)
            }
        </div>
    )
}
