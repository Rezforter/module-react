import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './pages/products';
import Basket from './pages/basket';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Products />
  },
  {
    path: '/basket',
    element: <Basket />
  }
])

// Закомментировать RouterProvider и заменить в basket-header Link на div для соответствия требованиям текущему ДЗ
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* {<App />} */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
