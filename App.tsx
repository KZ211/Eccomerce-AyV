import React from 'react';
import {Route, Routes} from "react-router-dom";

import Articulos from "./pages/Articulos";
import Login from "./components/login/Login"
import Layout from './components/layout/Layout';

import './style.css';

export default function App() {
  return
    <Routes>
      <Layout>
      <Route path="/" elemen={<Login />} />
      <Route path="/home" elemen={<Articulos />} />
      </Layout>
    </Routes>
}
