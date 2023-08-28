import { createBrowserRouter } from 'react-router-dom'
import * as URLS from './constants/urls'
import { Main } from './pages/main/Main'
import { NotFound } from './pages/404'
import { About } from './pages/about/About'
import { Cart } from './pages/Cart'
import { Order } from './pages/order/Order'
import { Product } from './pages/Product/Product'

export const router = createBrowserRouter([
  {
    path: URLS.MAIN,
    element: <Main />,
    errorElement: <NotFound />,
  },
  {
    path: URLS.ABOUT,
    element: <About />,
  },
  {
    path: URLS.CART,
    element: <Cart />,
  },
  {
    path: URLS.ORDER,
    element: <Order />,
  },
  {
    path: URLS.PRODUCT(),
    element: <Product />,
  },
])
