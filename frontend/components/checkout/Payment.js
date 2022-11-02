import Image from 'next/image';
import cashMoney from 'public/images/checkout/icon-cash-on-delivery.svg';
import InputSet from './InputSet';


export default function Payment({ isCash, setIsCash }) {
    const eMoneyMethod = () => setIsCash(false)
    const cashMethod = () => setIsCash(true)

    return (
        <fieldset className='Payment'>
            <legend className='Payment__subtitle'><h3>PAYMENT DETAILS</h3></legend>
            <div className='Payment__control'>
                <span className='Payment__label'>Payment Method</span>
                <div className='Payment__input'>
                    <InputSet id='e-Money-payment' type='radio' label='e-Money' name='PayMethod' value='e-Money' onClick={eMoneyMethod} checked />
                    <InputSet id='cash-payment' type='radio' label='Cash on Delivery' name='PayMethod' value='cash' onClick={cashMethod} />
                </div>
            </div>
            {!isCash ?
                <div className='Payment__e-Money'>
                    <InputSet id='e-Money#' label='e-Money Number' placeholder='238521993' validate='number' pattern='^(\d{9})$' maxLength={9} />
                    <InputSet id='e-Money-PIN' label='e-Money PIN' placeholder='6891' validate='number' pattern='^(\d{4})$' maxLength={4} />
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
