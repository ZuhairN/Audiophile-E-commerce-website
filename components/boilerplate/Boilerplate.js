import CartProvider from "logic/cart.context";
import Footer from "./Footer";
import Header from "./Header";

export default function Boilerplate(props) {
    return (
        <CartProvider>
            <Header />
            {props.children}
            <Footer />
        </CartProvider>
    )
}
