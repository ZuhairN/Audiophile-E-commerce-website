import { useState } from 'react';
import Image from 'next/image';
import cashMoney from 'public/images/checkout/icon-cash-on-delivery.svg';
import InputSet from './InputSet';


export default function Payment() {
    const [payMethod, setPayMethod] = useState('eMoney');
    const eMoneyMethod = () => setPayMethod('eMoney');
    const cashMethod = () => setPayMethod('cash');

    return (
        <fieldset className='Payment'>
            <legend className='Payment__subtitle'>PAYMENT DETAILS</legend>
            <div className='Payment__control'>
                <h5 className='Payment__label'>Payment Method</h5>
                <div className='Payment__input'>
                    <InputSet id='e-Money-payment' type='radio' label='e-Money' name='payMethod' value='e-Money' onClick={eMoneyMethod} checked />
                    <InputSet id='cash-payment' type='radio' label='Cash on Delivery' name='payMethod' value='cash' onClick={cashMethod} />
                </div>
            </div>
            {payMethod === 'eMoney' ?
                <div className='Payment__e-Money'>
                    <InputSet id='e-Money#' label='e-Money Number' placeholder='238521993' />
                    <InputSet id='e-Money-PIN' label='e-Money PIN' placeholder='6891' />
                </div>
                :
                <div className='Payment__cash'>
                    <Image src={cashMoney} alt='cash-money' />
                    <p className='para--dark'>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                </div>
            }
        </fieldset>
    )
}
