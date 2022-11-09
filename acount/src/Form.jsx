import React, { children } from 'react';

// import { Container } from './styles';


function Form(props) {
  return (
     <form className="flex flex-col gap-2 w-1/5">
       {props.children}
    </form>
  );
}

export default Form;