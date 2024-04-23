import { useContext } from 'react'
import CoinTable from '../components/CoinTable'
import constants from '../constants'
import useCoinMarket from '../hooks/useCoinMarket'
import CurrencyContext from '../contexts/CurrencyContext'

const CoinBookmarkPage = () => {
  const { currency } = useContext(CurrencyContext)
  const { coins, isLoading, fetchMore } = useCoinMarket({
    currency,
    view: 'bookmark',
  })

  return (
    <>
      <CoinTable coins={coins} currency={constants.default.market.currency} emptyMessage="북마크한 코인이 없습니다." />
    </>
  )
}

export default CoinBookmarkPage
