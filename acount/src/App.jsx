import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Input from './Input';
import Form from './Form';

const App = () => (
  <div className="flex items-center justify-center flex-col h-screen bg-gray-900">
 
      <h1 className="text-4xl text-gray-300">
        Crieate your acount
      </h1>
      <Form>
        <Input label="*Name" place="input our name"/>
      </Form>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
