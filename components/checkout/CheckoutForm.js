import Payment from './Payment';
import InputSet from './InputSet';

export default function CheckoutForm() {


    return (
        <form className='CheckoutForm' >
            <h2 className='heading--2'>CHECKOUT</h2>
            <fieldset className='CheckoutForm__billing'>
                <legend className='CheckoutForm__subtitle'>BILLING DETAILS</legend>
                <InputSet id='name' label='Name' placeholder='Alexei Ward' />
                <InputSet id='email' type='email' label='Email Address' placeholder='alexei@mail.com' />
                <InputSet id='phone#' label='Phone Number' placeholder='+1 202-555-0136' />
            </fieldset>
            <fieldset className='CheckoutForm__shipping'>
                <legend className='CheckoutForm__subtitle'>SHIPPING INFO</legend>
                <InputSet id='address' label='Address' placeholder='1137 Williams Avenue' />
                <InputSet id='zip-code' label='ZIP Code' placeholder='10001' />
                <InputSet id='city' label='City' placeholder='New York' />
                <InputSet id='country' label='Country' placeholder='United States' />
            </fieldset>
            <Payment />
        </form>
    )
}
