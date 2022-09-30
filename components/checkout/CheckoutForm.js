import Payment from './Payment';
import InputSet from './InputSet';
import { useState } from 'react';
import CartSummary from 'components/cart/CartSummary';
import useToggle from 'logic/useToggle';
import Confirmation from './Confirmation';

export default function CheckoutForm() {
    const [isSubmitted, toggleIsSubmitted] = useToggle(false);
    const [isCash, setIsCash] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        [...e.target.elements].map(ele => { if (ele.tagName === 'INPUT') (ele.focus(), ele.blur()) });
        if ([...e.target.elements].every((ele, i) => {
            console.log(i, ele.validity.valid);
            if (!ele.validity.valid) ele.focus();
            return ele.validity.valid;
        })) {
            toggleIsSubmitted();
        }
    }
    return (
        <form className='CheckoutForm' onSubmit={handleSubmit} noValidate>
            <div className='CheckoutForm__container'>
                <h1 className='heading--2'>CHECKOUT</h1>
                <fieldset className='CheckoutForm__billing'>
                    <h2 className='sr-only'>CHECKOUT FORM</h2>
                    <legend className='CheckoutForm__subtitle'><h3>BILLING DETAILS</h3></legend>
                    <InputSet id='name' label='Name' placeholder='Alexei Ward' validate='name' />
                    <InputSet id='email' type='email' label='Email Address' placeholder='alexei@mail.com' validate='email' pattern='^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$' />
                    <InputSet id='phone#' label='Phone Number' placeholder='+1 202-555-0136' validate='number' />
                </fieldset>
                <fieldset className='CheckoutForm__shipping'>
                    <legend className='CheckoutForm__subtitle'><h3>SHIPPING INFO</h3></legend>
                    <InputSet id='address' label='Address' placeholder='1137 Williams Avenue' validate='address' />
                    <InputSet id='zip-code' label='ZIP Code' placeholder='10001' validate='number' maxLength={5} pattern='^(\d{5})$' />
                    <InputSet id='city' label='City' placeholder='New York' validate='name' />
                    <InputSet id='country' label='Country' placeholder='United States' validate='name' />
                </fieldset>
                <Payment setIsCash={setIsCash} isCash={isCash} />
            </div>
            <CartSummary isCash={isCash} />
            {!isSubmitted ? null :
                <Confirmation isSubmitted={isSubmitted} />
            }
        </form>
    )
}
