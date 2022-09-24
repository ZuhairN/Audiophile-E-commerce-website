import { useContext, useEffect, useState } from 'react';
import { CartContext } from 'logic/cart.context';
import Btn from 'components/shared/Btn';
import CartItem from 'components/cart/CartItem';

export default function CartSummary() {
    const cart = useContext(CartContext);
    const [cartItems, setCartItems] = useState([]);//react hydration error
    useEffect(() => setCartItems(cart), [cart])

    let totalPrice = 0;
    cartItems.forEach(item => totalPrice += item.qty * item.price);

    return (
        <div className='CartSummary'>
            <h4 className='heading--4'>SUMMARY</h4>
            {cartItems.length ? cart.map(item => <CartItem key={item.id} {...item} />) : <h1>No Items in Cart</h1>}
            <div className='CartSummary__totalPrice'>
                <div className='CartSummary__invoice'>
                    <span>TOTAL</span>
                    <h4 className='heading--4'>$ {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h4>
                </div>
                <div className='CartSummary__invoice'>
                    <span>SHIPPING</span>
                    <h4 className='heading--4'>$ 50</h4>
                </div>
                <div className='CartSummary__invoice'>
                    <span>VAT (INCLUDED)</span>
                    <h4 className='heading--4'>$ {Math.floor(totalPrice * .2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h4>
                </div>
                <div className='CartSummary__invoice'>
                    <span>GRAND TOTAL</span>
                    <h4 className='heading--4'>$ {(totalPrice + 50).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h4>
                </div>
            </div>
            <Btn cls='orange' href='/checkout' text='CONTINUE & PAY' />
        </div >
    )
}
