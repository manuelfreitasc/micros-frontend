import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    Routes
  } from "react-router-dom";
  


import Form from 'acount/Form';
import Input from 'acount/Input';

export default function Login() {
    return (
        <div className="mt-10 text-3xl mx-auto max-w-6xl">
            <h1>LOGIN APP</h1>

            <Form>
                <Input label="*Name" place="input our name" />
            </Form>

            <Link to="/acount">
                <a href="" className="text-pink-600">Criar conta</a>
            </Link>
        </div>
    )
}