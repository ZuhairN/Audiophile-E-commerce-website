import { useContext, useEffect, useReducer } from "react";
import { useRouter } from 'next/router';
import Btn from "./Btn";
import { DispatchContext } from "logic/cart.context";
import reducer from "logic/qty.reducer";



export default function Product({ productId, category, categoryImage, image, name, description, isNew, price, shortName, isControlled }) {
    const cartDispatch = useContext(DispatchContext);
    const [counter, counterDispatch] = useReducer(reducer, { count: 1 });
    const { asPath } = useRouter();
    const sub = () => counterDispatch({ type: 'decrement', amount: 1 });
    const add = () => counterDispatch({ type: 'increment', amount: 1 });
    const addToCart = () => {
        cartDispatch({ type: 'add', id: productId, name: shortName, qty: counter.count, price });
        counterDispatch({ type: 'reset' })
    }
    useEffect(() => counterDispatch({ type: 'reset' }), [asPath]);


    return (
        <div className='Product'>
            <picture className='Product__img'>
                <source media='(min-width: 53.5em)' srcSet={!isControlled ? categoryImage.desktop : image.desktop} />
                <source media={!isControlled ? '(min-width: 33em)' : '(min-width: 37em)'} srcSet={!isControlled ? categoryImage.tablet : image.tablet} />
                <img src={!isControlled ? categoryImage.mobile : image.mobile} alt={name} />
            </picture>
            <div className='Product__content'>
                {isControlled ?
                    <h1 className='heading--2'>{isNew ? <span className='heading--span'>NEW PRODUCT</span> : null} {name.toUpperCase()}</h1> :
                    <h2 className='heading--2'>{isNew ? <span className='heading--span'>NEW PRODUCT</span> : null} {name.toUpperCase()}</h2>}
                <p className='para--dark'>{description}</p>

                {!isControlled ? <Btn cls='orange' href={`${category}/${productId}`} text='SEE PRODUCT' /> :
                    <> <span className='heading--4'>$ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                        <div className='Product__btns'>
                            <div className='Product__count'>
                                <button type='button' onClick={sub} onMouseUp={e => e.target.blur()}>-</button>
                                <span>{counter.count}</span>
                                <button type='button' onClick={add} onMouseUp={e => e.target.blur()}>+</button>
                            </div>
                            <button type='button' className='Btn--orange' onClick={addToCart} onMouseUp={e => e.target.blur()}>ADD TO CART</button>
                        </div>
                    </>}
            </div>
        </div>
    )
}
