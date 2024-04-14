import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Cart from './Components/Cart/Cart.jsx'
import Error from './Components/ErrorPage/Error.jsx'
import Home from './Home.jsx'
import Wishlist from './Components/Wishlist/Wishlist.jsx'
import DetailPage from './Components/Products/DetailPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/wishlist",
        element: <Wishlist />
      },
      {
        path: "/products/:id",
        element: <DetailPage />
      },
      {
        path: "*",
        element: <Error />
      }
    ]
  }
])


ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
