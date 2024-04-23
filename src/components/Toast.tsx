import { useEffect, useState } from 'react'

const Toast = ({ message, duration = 3000 }: { message: string; duration?: number }) => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div
        className={`bg-white px-6 py-4 drop-shadow border rounded z-50 transition-all${show ? ' opacity-100' : ' opacity-0'}`}
      >
        {message}
      </div>
    </>
  )
}

export default Toast
