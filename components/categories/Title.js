export default function Title({ title }) {
    return (
        <div className='Title'>
            <h1 className='heading--1'>{title.toUpperCase()}</h1>
        </div>
    )
}
