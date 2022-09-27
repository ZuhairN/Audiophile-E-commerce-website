import CartItem from "components/cart/CartItem";
import Btn from "components/shared/Btn";
import LightBox from "components/shared/LightBox";
import { CartContext, DispatchContext } from "logic/cart.context";
import Image from "next/image";
import checkMark from 'public/images/shared/desktop/icon-check-mark.svg';
import { useContext, useState } from "react";


export default function Confirm({ isSubmitted }) {
    const dispatch = useContext(DispatchContext);
    const cart = useContext(CartContext)
    const [isLess, setIsLess] = useState(true);
    const viewLess = () => setIsLess(true);
    const viewMore = () => setIsLess(false);
    const resetCart = () => dispatch({ type: 'reset' });
    const grandTotal = cart.reduce((total, { qty, price }) => total + qty * price, 50);

    return (
        <div className='Confirmation'>
            <div className='Confirmation__details'>
                <div className='Confirmation__img'><Image src={checkMark} alt='checkMark' /></div>
                <h2 className='heading--2'><span>THANK YOU</span> FOR YOUR ORDER</h2>
                <p className='para--dark'>You will receive an email confirmation shortly.</p>
                <div className='Confirmation__summary'>
                    <div className='Confirmation__items'>
                        {isLess ?
                            cart.map((item, i) => { if (i === 0) return <CartItem key={item.id} {...item} /> })
                            : cart.map(item => <CartItem key={item.id} {...item} />)
                        }
                        <button type='button' className='Confirmation__btn' onClick={isLess ? viewMore : viewLess}>{isLess ? `View More(+${cart.length - 1})` : 'View Less'} </button>
                    </div>
                    <div className='Confirmation__grandTotal'><h3>GRAND TOTAL </h3><span>$ {grandTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></div>
                </div>
                <Btn cls='orange' href='/' text='BACK TO HOME' handleClick={resetCart} />
            </div>
            <LightBox isExpanded={isSubmitted} />
        </div>
    )
}
