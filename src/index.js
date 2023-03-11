import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Pageproducts from './pages/products';
import Basket from './pages/basket';

// если нужно убрать левый скролл, т.к. он "не соответствует макету"
// то я его уберу в финальной работе, как по мне он красиво выглядит
// и вписывается в дизайн страницы

const router = createBrowserRouter([
  {
    path: '/',
    element: <Pageproducts />
  },
  {
    path: '/basket',
    element: <Basket />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
