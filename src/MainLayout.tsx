import { Outlet } from 'react-router-dom'
import GNB from './components/GNB'

const MainLayout = () => {
  return (
    <>
      <GNB />
      <Outlet />
    </>
  )
}

export default MainLayout
