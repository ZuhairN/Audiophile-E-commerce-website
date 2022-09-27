import { useState } from "react";

const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const validateList = { name: /[^A-Za-z _-]/g, 'email': /[^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$]/g, number: /[^0-9]+/g, address: /[^A-Za-z0-9 _-]/g }

export default function InputSet({ id, type = 'text', label, placeholder, name, value, validate, pattern, maxLength, checked, onClick }) {
  const [input, setInput] = useState({ value: '', isError: false, errorText: '' });

  const handleChange = (e) => {
    e.target.value = e.target.value.replace(validateList[validate], '');
    if (type === 'email' && !regex.test(e.target.value) && input.errorText === 'Invalid Email') return setInput(st => ({ ...st, value: e.target.value }));
    if (maxLength && e.target.value.length < maxLength && input.errorText !== 'Required') return setInput(st => ({ ...st, value: e.target.value }))
    return setInput(st => ({ ...st, value: e.target.value, isError: false }))
  }

  const handleBlur = (e) => {
    if (e.target.value === '') return setInput(st => ({ ...st, isError: true, errorText: 'Required' }));
    if (type === 'email' && !regex.test(e.target.value)) return setInput(st => ({ ...st, isError: true, errorText: 'Invalid Email' }))
    if (maxLength && e.target.value.length < maxLength) return setInput(st => ({ ...st, isError: true, errorText: `Must be ${maxLength} digits` }))
    return setInput(st => ({ ...st, isError: false }))
  };

  return (
    <div className={type !== 'radio' ? `InputSet${input.isError ? ' empty' : ''}` : 'InputSet--radio'}>
      {type !== 'radio' ? (
        <>
          <div className='InputSet__error'>{input.errorText}</div>
          <label className='InputSet__label' htmlFor={id}>{label}</label>
          <input className='InputSet__input' id={id} type={type} placeholder={placeholder} value={input.value} pattern={pattern} maxLength={maxLength} onChange={handleChange} onBlur={handleBlur} required />
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
