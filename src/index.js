import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './pages/products';
import Basket from './pages/basket';
import ProductDescription from './pages/productDescription';
import { Provider } from 'react-redux';
import { store } from './store';
import RegAuthForm from './pages/regAuthForm';
import AuthRegForm, { activeUserDataKey } from './pages/authRegForm';

//заблокировать доступ, если не авторизован

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthRegForm />
  },
  {
    path: '/products',
    element: <Products />
  },
  {
    path: '/basket',
    element: <Basket />
  },
  {
    path: '/products/:productId',
    element: <ProductDescription />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
