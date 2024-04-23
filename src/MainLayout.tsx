import { Outlet } from 'react-router-dom'
import GNB from './components/GNB'
import ToastContainer from './components/ToastContainer'

const MainLayout = () => {
  return (
    <>
      <GNB />
      <div className="p-5">
        <Outlet />
      </div>
      <ToastContainer />
    </>
  )
}

export default MainLayout
