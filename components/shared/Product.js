import Btn from "./Btn";

export default function Product({ productId, category, categoryImage, image, name, description, isNew, price, alpha }) {
    return (
        <div className='Product'>
            <picture className='Product__img'>
                <source media='(min-width: 53.5em)' srcSet={!alpha ? categoryImage.desktop : image.desktop} />
                <source media={!alpha ? '(min-width: 33em)' : '(min-width: 44.95em)'} srcSet={!alpha ? categoryImage.tablet : image.tablet} />
                <img src={!alpha ? categoryImage.mobile : image.mobile} alt={name} />
            </picture>
            <div className='Product__content'>
                <h2 className='heading--2'>{isNew ? <span className='heading--span'>NEW PRODUCT</span> : null} {name.toUpperCase()}</h2>
                <p className='para--dark'>{description}</p>

                {!alpha ? <Btn cls='orange' href={`${category}/${productId}`} text='SEE PRODUCT' /> :
                    <> <h4 className='heading--4'>$ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h4>
                        <div className='Product__btns'>
                            <div className='Product__count'>
                                <button type='button'>-</button>
                                <span>1</span>
                                <button type='button'>+</button>
                            </div>
                            <Btn cls='orange' href={`/${category}`} text='ADD TO CART' />
                        </div></>
                }
            </div>
        </div>
    )
}
