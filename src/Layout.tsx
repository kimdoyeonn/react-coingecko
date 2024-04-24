import { Outlet } from 'react-router-dom'
import GNB from './components/common/GNB'

const MainLayout = () => {
  return (
    <>
      <GNB />
      <div className="p-5">
        <Outlet />
      </div>
    </>
  )
}

export default MainLayout
