export default function InputSet({ id, type = 'text', label, placeholder, name, value, checked, onClick }) {
  const setClass = type !== 'radio' ? 'InputSet' : 'InputSet--radio';

  return (
    <div className={setClass}>
      {type !== 'radio' ? (
        <>
          <label className='InputSet__label' htmlFor={id}>{label}</label>
          <input className='InputSet__input' id={id} type={type} placeholder={placeholder} />
        </>
      ) : (
        <>
          <input className='InputSet--radio__input' id={id} type={type} name={name} value={value} placeholder={placeholder} defaultChecked={checked} onClick={onClick} />
          <label className='InputSet--radio__label' htmlFor={id}>
            <div><span></span></div>
            <h4>{label}</h4>
          </label>
        </>
      )}
    </div>
  )
}
