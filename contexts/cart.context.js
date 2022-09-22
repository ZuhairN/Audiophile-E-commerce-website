import { createContext } from 'react';
import reducer from './cart.reducer';
import useLocalStorageReducer from './useLocalStorageReducer';

export const CartContext = createContext();

export default function CartProvider(props) {
    const value = useLocalStorageReducer(reducer, [])
    return (
        <CartContext.Provider value={value}>
            {props.children}
        </CartContext.Provider>
    )
}
