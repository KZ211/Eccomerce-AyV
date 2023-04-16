import React, {useState, useEffect} from 'react';
import {Route, Routes} from "react-router-dom";

import Articulos from "./pages/Articulos";
import Login from "./components/login/Login"
import Layout from './components/layout/Layout';

import './style.css';

export default function App() {
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    fetch('/api/mensaje')
      .then(res => res.text())
      .then(data => setMensaje(data));
  }, []);

  return(
      <Layout>
        <h1>{mensaje}</h1>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Articulos />} />
    </Routes>
      </Layout>
  );
}
