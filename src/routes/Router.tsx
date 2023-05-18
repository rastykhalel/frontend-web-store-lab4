import { createBrowserRouter } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Products } from '../pages/Products';
import { ShoppingCart } from '../pages/ShoppingCart';
import { SignUp } from '../pages/SignUp';
import { Login } from '../pages/Login';
import { Error404 } from '../pages/Error404';

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/cart",
    element: <ShoppingCart />
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: '*',
    element: <Error404 />
  },
]);
