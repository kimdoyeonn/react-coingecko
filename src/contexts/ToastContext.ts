import { createContext } from 'react'

const ToastContext = createContext<{
  toasts: { id: number; message: string; duration: number }[]
  addToast: (toast: { message: string; duration?: number }) => void
  removeToast: (id: number) => void
}>({ toasts: [], addToast: () => null, removeToast: () => null })

export default ToastContext
