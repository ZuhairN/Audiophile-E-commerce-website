import { useState } from 'react';
import Image from "next/image";
import cashMoney from 'public/images/checkout/icon-cash-on-delivery.svg';

export default function CheckoutForm() {
    const [eMoneyPay, setEMoneyPay] = useState(true);
    const e_MoneyPay = () => setEMoneyPay(true);
    const cashPay = () => setEMoneyPay(false)

    return (
        <form className='CheckoutForm' >
            <h2 className='heading--2'>CHECKOUT</h2>
            <fieldset className='CheckoutForm__billing'>
                <legend className='CheckoutForm__subtitle'>BILLING DETAILS</legend>
                <div className='CheckoutForm__input'>
                    <label className='CheckoutForm__label' htmlFor='name'>Name</label>
                    <input id='name' type='text' placeholder='Alexei Ward' />
                </div>
                <div className='CheckoutForm__input'>
                    <label className='CheckoutForm__label' htmlFor='email'>Email Address</label>
                    <input id='email' type='email' placeholder='alexei@mail.com' />
                </div>
                <div className='CheckoutForm__input'>
                    <label className='CheckoutForm__label' htmlFor='phone#'>Phone Number</label>
                    <input id='phone#' type='text' placeholder='+1 202-555-0136' />
                </div>
            </fieldset>
            <fieldset className='CheckoutForm__shipping'>
                <legend className='CheckoutForm__subtitle'>SHIPPING INFO</legend>
                <div className='CheckoutForm__input'>
                    <label className='CheckoutForm__label' htmlFor='address'>Address</label>
                    <input id='address' type='text' placeholder='1137 Williams Avenue' />
                </div>
                <div className='CheckoutForm__input'>
                    <label className='CheckoutForm__label' htmlFor='zip-code'>ZIP Code</label>
                    <input id='zip-code' type='text' placeholder='10001' />
                </div>
                <div className='CheckoutForm__input'>
                    <label className='CheckoutForm__label' htmlFor='city'>City</label>
                    <input id='city' type='text' placeholder='New York' />
                </div>
                <div className='CheckoutForm__input'>
                    <label className='CheckoutForm__label' htmlFor='country'>Country</label>
                    <input id='country' type='text' placeholder='United States' />
                </div>
            </fieldset>
            <fieldset className='CheckoutForm__payment'>
                <legend className='CheckoutForm__subtitle'>PAYMENT DETAILS</legend>
                <div className='CheckoutForm__input--radio'>
                    <h5 className='CheckoutForm__label'>Payment Method</h5>
                    <div className='CheckoutForm__payMethods'>
                        <input id='e-Money-payment' type='radio' name='payment-method' value='e-Money' defaultChecked='true' onClick={e_MoneyPay} />
                        <label className='CheckoutForm__method' htmlFor='e-Money-payment'>
                            <div><span></span></div>
                            <h4>e-Money</h4>
                        </label>
                        <input id='cash-payment' type='radio' name='payment-method' value='cash' onClick={cashPay} />
                        <label className='CheckoutForm__method' htmlFor='cash-payment'>
                            <div><span></span></div>
                            <h4>Cash on Delivery</h4>
                        </label>
                    </div>
                </div>
                {eMoneyPay ?
                    <div className='CheckoutForm__e-Money'>
                        <div className='CheckoutForm__input'>
                            <label className='CheckoutForm__label' htmlFor='e-Money-No'>e-Money Number</label>
                            <input id='e-Money-No' type='text' placeholder='238521993' />
                        </div>
                        <div className='CheckoutForm__input'>
                            <label className='CheckoutForm__label' htmlFor='e-Money-PIN'>e-Money PIN</label>
                            <input id='e-Money-PIN' type='text' placeholder='6891' />
                        </div>
                    </div>
                    :
                    <div className='CheckoutForm__cash'>
                        <Image src={cashMoney} alt='cash-money' />
                        <p className='para--dark'>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                    </div>
                }
            </fieldset>
        </form>
    )
}
