import { useContext } from "react";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";
import { DispatchContext } from "logic/cart.context";

export default function CartItem({ id, name, qty, price, isControlled }) {
    const dispatch = useContext(DispatchContext);
    const sub = (id, qty) => dispatch({ type: qty !== 1 ? 'decrement' : 'destroy', id });
    const add = (id) => dispatch({ type: 'increment', id });

    return (
        <div className='CartItem'>
            <Image src={`/Audiophile-E-commerce-website/images/cart/image-${id}.jpg`} alt={name} width='64px' height='64px' />
            <div className='CartItem__info'>
                <span>{name}</span>
                <span className='CartItem__price'>$ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
            </div>
            {!isControlled ? (
                <span className='CartItem__qty'>x{qty}</span>
            ) : (
                <div className='CartItem__control'>
                    <button type='button' onClick={() => sub(id, qty)} aria-label={qty !== 1 ? `Decrement ${name} qty by one` : `Remove ${name} from cart`} onMouseUp={e => e.target.blur()}>{qty !== 1 ? '-' : <AiOutlineDelete />}</button>
                    <span>{qty}</span>
                    <button type='button' onClick={() => add(id)} aria-label={`Increment ${name} qty by one`} onMouseUp={e => e.target.blur()}>+</button>
                </div>
            )}
        </div>
    )
}
