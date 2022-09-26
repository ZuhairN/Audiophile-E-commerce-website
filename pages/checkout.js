import Head from "next/head";
import CheckoutForm from 'components/checkout/CheckoutForm';
import BackBtn from "components/shared/BackBtn";

export default function Checkout() {
    return (
        <>
            <Head>
                <title>Audiophile-checkout</title>
            </Head>
            <main className='Checkout'>
                <div className='Checkout__container'>
                    <BackBtn />
                    <CheckoutForm />
                </div>
            </main>
        </>
    )
}
