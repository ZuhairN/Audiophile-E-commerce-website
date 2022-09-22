import { useContext, useEffect, useReducer } from "react";
import { useRouter } from 'next/router';
import Btn from "./Btn";
import { CartContext } from "contexts/cart.context";

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.amount };
        case 'decrement':
            if (state.count === 1) return { count: 1 }
            return { count: state.count - action.amount };
        case 'reset':
            return { count: 1 }
        default:
            return { count: state.count }
    }
}

export default function Product({ productId, category, categoryImage, image, name, description, isNew, price, shortName, alpha }) {
    const { asPath } = useRouter();
    const [counter, dispatch] = useReducer(reducer, { count: 1 });
    const sub = () => dispatch({ type: 'decrement', amount: 1 });
    const add = () => dispatch({ type: 'increment', amount: 1 });
    useEffect(() => dispatch({ type: 'reset' }), [asPath]);

    const [cart, cartDispatch] = useContext(CartContext);
    const addToCart = () => {
        cartDispatch({ type: 'add', id: productId, name: shortName, qty: counter.count, price });
        dispatch({ type: 'reset' })
    }

    return (
        <div className='Product'>
            <picture className='Product__img'>
                <source media='(min-width: 53.5em)' srcSet={!alpha ? categoryImage.desktop : image.desktop} />
                <source media={!alpha ? '(min-width: 33em)' : '(min-width: 40em)'} srcSet={!alpha ? categoryImage.tablet : image.tablet} />
                <img src={!alpha ? categoryImage.mobile : image.mobile} alt={name} />
            </picture>
            <div className='Product__content'>
                <h2 className='heading--2'>{isNew ? <span className='heading--span'>NEW PRODUCT</span> : null} {name.toUpperCase()}</h2>
                <p className='para--dark'>{description}</p>

                {!alpha ? <Btn cls='orange' href={`${category}/${productId}`} text='SEE PRODUCT' /> :
                    <> <h4 className='heading--4'>$ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h4>
                        <div className='Product__btns'>
                            <div className='Product__count'>
                                <button type='button' onClick={sub}><span>-</span></button>
                                <span>{counter.count}</span>
                                <button type='button' onClick={add}><span>+</span></button>
                            </div>
                            <button className='Btn--orange' onClick={addToCart}>ADD TO CART</button>
                        </div></>
                }
            </div>
        </div>
    )
}
