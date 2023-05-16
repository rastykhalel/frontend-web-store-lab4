import { createBrowserRouter } from 'react-router-dom';

import { ShoppingCart } from '../pages/ShoppingCart';
import { Home } from '../pages/Home';
import { Products } from '../pages/Products';
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
    path: '*',
    element: <Error404 />
  },
]);
