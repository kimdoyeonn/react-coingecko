import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout'
import CoinListPage from './pages/CoinList'
import CoinBookmarkPage from './pages/CoinBookmark'
import ToastProvider from './contexts/ToastProvider'
import CurrencyProvider from './contexts/CurrencyProvider'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <CoinListPage />,
      },
      {
        path: '/coins',
        element: <CoinListPage />,
      },
      {
        path: '/coins/bookmark',
        element: <CoinBookmarkPage />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <CurrencyProvider>
      <ToastProvider>
        <RouterProvider router={router} />
      </ToastProvider>
    </CurrencyProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
