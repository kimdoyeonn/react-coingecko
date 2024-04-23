import { useContext, useState } from 'react'
import useBookmark from '../hooks/useBookmark'
import { CoinType, CurrencyType } from '../types/coin'
import BookmarkButton from './BookmarkButton'
import ToastContext from '../contexts/ToastContext'
import constants from '../constants'

const PercentageItem = ({
  percentage,
  className = '',
}: {
  percentage: number
  className?: HTMLDivElement['className']
}) => {
  return (
    <div className={className + (percentage > 0 ? ' rise' : ' fall' + (percentage === 0 ? 'text-gray' : ''))}>
      {(percentage ?? 0).toFixed(2)}%
    </div>
  )
}

const PriceItem = ({
  price,
  currency,
  className,
}: {
  price: number
  currency: CurrencyType
  className?: HTMLDivElement['className']
}) => {
  const prefix = currency === 'krw' ? '₩' : currency === 'usd' ? '$' : ''
  const formattedPrice = price
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    .replace('.00', '')

  return <div className={className}>{prefix + formattedPrice}</div>
}

const CoinTableRow = ({ coin, currency }: { coin: CoinType; currency: CurrencyType }) => {
  const { addToast } = useContext(ToastContext)
  const { addBookmark, removeBookmark, getIsBookmarked } = useBookmark()
  const [isBookmarked, setIsBookmarked] = useState(getIsBookmarked(coin.id))

  const handleBookmark = (target: string) => {
    if (isBookmarked) {
      removeBookmark(target)
      setIsBookmarked(false)
      addToast({ message: constants.bookmark.toast.remove })
    } else {
      addBookmark(target)
      setIsBookmarked(true)
      addToast({ message: constants.bookmark.toast.add })
    }
  }
  console.log(coin.symbol, coin)
  return (
    <>
      <div className="coin-table row">
        <div className="text-left cursor-pointer" onClick={() => handleBookmark(coin.id)}>
          <BookmarkButton checked={isBookmarked} size={20} />
        </div>
        <div className="col-span-2 text-left">{coin.name}</div>
        <div className="text-left">{(coin.symbol ?? '').toUpperCase()}</div>
        <PriceItem price={coin.current_price} currency={currency} className="col-span-2 text-end" />
        <PercentageItem percentage={coin.price_change_percentage_1h_in_currency} />
        <PercentageItem percentage={coin.price_change_percentage_24h_in_currency} />
        <PercentageItem percentage={coin.price_change_percentage_7d_in_currency} />
        <PriceItem price={coin.total_volume} currency={currency} className="col-span-3 text-end" />
      </div>
    </>
  )
}

const CoinTable = ({
  coins,
  currency,
  emptyMessage = '',
}: {
  coins: CoinType[]
  currency: CurrencyType
  emptyMessage?: string
}) => {
  return (
    <>
      <div className="coin-table row head">
        <div></div>
        <div className="col-span-3 text-left">자산</div>
        <div className="col-span-2 text-end">Price</div>
        <div>1H</div>
        <div>24H</div>
        <div>7D</div>
        <div className="col-span-3">24H Volume</div>
      </div>
      {coins.length > 0 ? (
        coins.map((coin) => <CoinTableRow key={coin.id} currency={currency} coin={coin} />)
      ) : (
        <div>{emptyMessage}</div>
      )}
    </>
  )
}

export default CoinTable
