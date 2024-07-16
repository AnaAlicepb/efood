import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'

import { GlobalCss } from './main-styles'
import HomePage from './views/Home/page'
import KnowMorePage from './views/KnowMore/page'
import Footer from './components/footer'
import Cart from './components/Cart'
import { Provider } from 'react-redux'
import { store } from './store'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/KnowMore/:id',
    element: <KnowMorePage />
  }
])

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalCss />
        <RouterProvider router={routes} />
        <Footer />
        <Cart />
      </Provider>
    </>
  )
}

export default App
