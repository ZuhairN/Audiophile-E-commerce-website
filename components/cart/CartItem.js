import { useContext } from "react";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";
import { DispatchContext } from "logic/cart.context";

export default function CartItem({ id, name, qty, price, isControlled }) {
    const dispatch = useContext(DispatchContext);

    return (
        <div className='CartItem'>
            <Image src={`/images/cart/image-${id}.jpg`} alt={name} width='64px' height='64px' />
            <div className='CartItem__info'>
                <span>{name}</span>
                <span className='CartItem__price'>$ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
            </div>
            {!isControlled ? (
                <span className='CartItem__qty'>x{qty}</span>
            ) : (
                <div className='CartItem__control'>
                    <button className='CartItem__control__btn' type='button' onClick={() => dispatch({ type: qty !== 1 ? 'decrement' : 'destroy', id })}>{qty !== 1 ? '-' : <AiOutlineDelete />}</button>
                    <span className='CartItem__control__count'>{qty}</span>
                    <button className='CartItem__control__btn' type='button' onClick={() => dispatch({ type: 'increment', id })} >+</button>
                </div>
            )}
        </div>
    )
}
