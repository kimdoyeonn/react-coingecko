import { ReactNode, useState } from 'react'
import ToastContext from './ToastContext'

const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<{ id: number; message: string; duration: number }[]>([])

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((p) => p.id !== id))
  }

  const addToast = ({ message, duration = 3000 }: { message: string; duration?: number }) => {
    const id = Date.now()
    setToasts((prev) => [{ id, message, duration }, ...prev])

    setTimeout(() => {
      removeToast(id)
    }, duration)
  }

  return <ToastContext.Provider value={{ toasts, addToast, removeToast }}>{children}</ToastContext.Provider>
}

export default ToastProvider
