import { useState } from 'react'

const Chevron = ({ size }: { size?: number }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size ?? '24'} height={size ?? '24'} viewBox="0 0 24 24">
      <path d="M8.82539569,13.8796283 C8.61573277,14.0593394 8.30008277,14.0350586 8.1203717,13.8253957 C7.94066062,13.6157328 7.96494139,13.3000828 8.17460431,13.1203717 L11.6746043,10.1203717 C11.8618492,9.9598761 12.1381508,9.9598761 12.3253957,10.1203717 L15.8253957,13.1203717 C16.0350586,13.3000828 16.0593394,13.6157328 15.8796283,13.8253957 C15.6999172,14.0350586 15.3842672,14.0593394 15.1746043,13.8796283 L12,11.1585389 L8.82539569,13.8796283 Z" />
    </svg>
  )
}

const CoinDescription = ({ description }: { description: string }) => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <div className="border-b py-3 px-4 font-bold flex" onClick={() => setOpen((prev) => !prev)}>
        설명보기
        <div className={open ? 'rotate-180' : ''}>
          <Chevron size={20} />
        </div>
      </div>
      {open ? <div>{description}</div> : null}
    </div>
  )
}

export default CoinDescription
