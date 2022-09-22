import { useState, useContext, useEffect } from 'react';
import { CartContext } from 'contexts/cart.context';
import { AiOutlineShoppingCart, AiOutlineDelete } from 'react-icons/ai';
import Image from 'next/image';
import Btn from '../shared/Btn';


export default function Cart() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [cartItems, setCartItems] = useState([]); //React hydration error
    const toggleCart = () => setIsExpanded(st => !st);
    const [cart, dispatch] = useContext(CartContext);
    const reset = () => dispatch({ type: 'reset' });
    useEffect(() => setCartItems(cart), [cart])

    let total = 0;
    let totalPrice = 0;
    cart.forEach(item => total += item.qty);
    cart.forEach(item => totalPrice += item.qty * item.price);

    return (
        <div className='Cart' >
            <AiOutlineShoppingCart className='Cart__logo' onClick={toggleCart} />
            {cartItems.length ? <div className='Cart__num'>{total}</div> : null}
            <div className={`Cart__details ${isExpanded ? 'active' : ''}`}>
                {!cartItems.length ?
                    <>
                        <p className='para--dark'>Your Cart is empty</p>
                        <AiOutlineShoppingCart className='Cart__details__logo' />
                    </>
                    :
                    <>
                        <div className='Cart__title'>
                            <h4 className='heading--4'>CART({total})</h4>
                            <button onClick={reset}>Remove all</button>
                        </div>
                        {cartItems.map(item => (
                            <div key={item.id} className='Cart__item'>
                                <Image src={`/images/cart/image-${item.id}.jpg`} alt={item.name} width='64px' height='64px' />
                                <div className='Cart__item__price'>
                                    <span>{item.name}</span>
                                    <span>$ {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                                </div>
                                <div className='Cart__count'>
                                    <button type='button' onClick={() => dispatch({ type: item.qty !== 1 ? 'decrement' : 'destroy', id: item.id })}>{item.qty !== 1 ? '-' : <AiOutlineDelete />}</button>
                                    <span>{item.qty}</span>
                                    <button type='button' onClick={() => dispatch({ type: 'increment', id: item.id })} >+</button>
                                </div>
                            </div>
                        ))}
                        <div className='Cart__totalPrice'>
                            <span>TOTAL</span>
                            <h4 className='heading--4'>$ {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h4>
                        </div>
                        <Btn cls='orange' href='/' text='CHECKOUT' />
                    </>
                }
            </div>
            <div className={`Cart__lightbox ${isExpanded ? 'active' : ''}`}></div>
        </div>
    )
}
