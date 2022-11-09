import React from 'react';

// import { Container } from './styles';

function Input(props) {
  return (
    <div className=''>
        <label htmlFor="">{props.label}</label>
        <input type="text" className='bg-gray-800 w-full  h-14 outline-none border-0 rounded-lg' placeholder={props.place}/>
    </div>
  );
}

export default Input;