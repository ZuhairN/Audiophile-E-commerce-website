import Btn from "components/shared/Btn";
import { CartContext, DispatchContext } from "logic/cart.context";
import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartItem from "./CartItem";

export default function CartSummary({ isControlled, collapse, isCash }) {
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
                        <h2 className='heading--4'>{isControlled ? <>CART({sum.totalQty}<span className="sr-only"> item(s) in</span>)</> : <><span className='sr-only'>CART </span>SUMMARY</>}</h2>
                        {isControlled ? <button onClick={reset}>Remove all</button> : null}
                    </div>
                    {cart.map(item => <CartItem key={item.id} {...item} isControlled={isControlled} />)}
                    <div className='CartSummary__totalPrice'>
                        <div className='CartSummary__invoice'>
                            <span className='CartSummary__subtitle'>TOTAL</span>
                            <span className='heading--4'>$ {sum.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                        </div>
                        {isControlled ? null :
                            <>
                                <div className='CartSummary__invoice'>
                                    <span className='CartSummary__subtitle'>SHIPPING</span>
                                    <span className='heading--4'>$ 50</span>
                                </div>
                                <div className='CartSummary__invoice'>
                                    <span className='CartSummary__subtitle'>VAT (INCLUDED)</span>
                                    <span className='heading--4'>$ {Math.floor(sum.totalPrice * .2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                                </div>
                                <div className='CartSummary__invoice'>
                                    <span className='CartSummary__subtitle'>GRAND TOTAL</span>
                                    <span className='heading--4'>$ {(sum.totalPrice + 50).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                                </div>
                            </>}
                    </div>
                    <div className='CartSummary__btn' onClick={isControlled ? collapse : null}>
                        {isControlled ?
                            <Btn cls='orange' href='/checkout' text='CHECKOUT' />
                            :
                            <button type='submit' className='Btn--orange'>{isCash ? 'CONTINUE' : 'CONTINUE & PAY'}</button>
                        }
                    </div>
                </>)
            }
        </div>
    )
}
