import Btn from "./Btn";

export default function Product({ img, name, description, isNew, price }) {
    return (
        <div className='Product'>
            <picture>
                <source media='(min-width: 53.5em)' srcSet={img.desktop} />
                <source media='(min-width: 33em)' srcSet={img.tablet} />
                <img className='Product__img' src={img.mobile} alt={name} />
            </picture>
            <div className='Product__content'>
                <h2 className='heading--2'>{isNew ? <span className='heading--span'>NEW PRODUCT</span> : null} {name}</h2>
                <p className='para--dark'>{description}</p>
                <h3 className='heading--3'>${price}</h3>
                <div className='Product__btns'>
                    <div className='Product__count'>
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                    <Btn cls='orange' href='' text={price ? 'ADD TO CART' : 'SEE PRODUCT'} />
                </div>
            </div>
        </div>
    )
}
