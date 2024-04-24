import { useContext } from 'react'
import Toast from './Toast'
import ToastContext from '../../contexts/ToastContext'

const ToastContainer = () => {
  const { toasts } = useContext(ToastContext)

  return (
    <div className="fixed top-4 right-4 flex flex-col gap-4">
      {toasts.map((toast) => (
        <Toast key={toast.id} message={toast.message} />
      ))}
    </div>
  )
}

export default ToastContainer
