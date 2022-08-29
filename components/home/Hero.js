import Btn from '../Btn';

export default function Hero() {
    return (
        <div className='Hero'>
            <h1 className='heading--1'><span>NEW PRODUCT</span>XX99 MARK II HEADPHONE</h1>
            <p className='para'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <Btn cls='orange' />
            <div className='Hero__bg'></div>
        </div>
    )
}
