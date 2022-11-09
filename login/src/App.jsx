import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

import "./index.scss";
import Login from "./Login"
import Input from 'acount/Input';

import Home from 'home/Home';


const AppLog = () => (
  <BrowserRouter>
    <Routes>

    <Route  exact path="/" element={<Home />} />
      <Route   path="/login" element={<Login />} />

      <Route path="/acount" element={<Input />} />

    </Routes>
  </BrowserRouter>

);
ReactDOM.render(<AppLog />, document.getElementById("app"));
