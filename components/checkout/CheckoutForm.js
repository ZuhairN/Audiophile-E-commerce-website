import Payment from './Payment';
import InputSet from './InputSet';
import { useState } from 'react';
import CartSummary from 'components/cart/CartSummary';

export default function CheckoutForm() {
    const [isCash, setIsCash] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className='CheckoutForm' onSubmit={handleSubmit} noValidate>
            <div className='CheckoutForm__container'>
                <h2 className='heading--2'>CHECKOUT</h2>
                <fieldset className='CheckoutForm__billing'>
                    <legend className='CheckoutForm__subtitle'>BILLING DETAILS</legend>
                    <InputSet id='name' label='Name' placeholder='Alexei Ward' pattern='name' />
                    <InputSet id='email' type='email' label='Email Address' placeholder='alexei@mail.com' pattern='email' />
                    <InputSet id='phone#' label='Phone Number' placeholder='+1 202-555-0136' pattern='number' />
                </fieldset>
                <fieldset className='CheckoutForm__shipping'>
                    <legend className='CheckoutForm__subtitle'>SHIPPING INFO</legend>
                    <InputSet id='address' label='Address' placeholder='1137 Williams Avenue' pattern='address' />
                    <InputSet id='zip-code' label='ZIP Code' placeholder='10001' pattern='number' maxLength={5} />
                    <InputSet id='city' label='City' placeholder='New York' pattern='name' />
                    <InputSet id='country' label='Country' placeholder='United States' pattern='name' />
                </fieldset>
                <Payment setIsCash={setIsCash} isCash={isCash} />
            </div>
            <CartSummary isCash={isCash} />
        </form>
    )
}
