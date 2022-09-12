import Btn from "./Btn";

export default function Product({ productId, category, categoryImage, name, description, isNew, price, alpha }) {
    return (
        <div className='Product'>
            <picture>
                <source media='(min-width: 53.5em)' srcSet={categoryImage.desktop} />
                <source media='(min-width: 33em)' srcSet={categoryImage.tablet} />
                <img className='Product__img' src={categoryImage.mobile} alt={name} />
            </picture>
            <div className='Product__content'>
                <h2 className='heading--2'>{isNew ? <span className='heading--span'>NEW PRODUCT</span> : null} {name}</h2>
                <p className='para--dark'>{description}</p>

                {!alpha ? <Btn cls='orange' href={`${category}/${productId}`} text='SEE PRODUCT' /> :
                    <> <h3 className='heading--3'>${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h3>
                        <div className='Product__btns'>
                            <div className='Product__count'>
                                <button type='button'>-</button>
                                <span>1</span>
                                <button typbe='button'>+</button>
                            </div>
                            <Btn cls='orange' href={`/${category}`} text='ADD TO CART' />
                        </div></>
                }
            </div>
        </div>
    )
}
