import { createContext, useEffect, useState } from 'react';
import reducer from './cart.reducer';
import useLocalStorageReducer from './useLocalStorageReducer';

export const CartContext = createContext();
export const DispatchContext = createContext();

export default function CartProvider(props) {
    const [cart, setCart] = useState([]); //React hydration error + more efficient to avoid unnecessary renders
    const [state, dispatch] = useLocalStorageReducer(reducer, [])
    useEffect(() => setCart(state), [state])
    return (
        <CartContext.Provider value={cart}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </CartContext.Provider>
    )
}
