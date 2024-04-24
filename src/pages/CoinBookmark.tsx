import { useContext } from 'react'
import CoinTable from '../components/coin-table'
import constants from '../constants'
import useCoinMarket from '../hooks/useCoinMarket'
import CurrencyContext from '../contexts/CurrencyContext'
import Loader from '../components/common/Loader'

const CoinBookmarkPage = () => {
  const { currency } = useContext(CurrencyContext)
  const { coins, isLoading, errorMessage } = useCoinMarket({
    currency,
    view: 'bookmark',
  })

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div>
            <div className="font-bold text-red-500">{errorMessage}</div>
          </div>
          <CoinTable
            key={location.pathname}
            coins={coins}
            currency={constants.default.market.currency}
            emptyMessage="정보를 불러오지 못했습니다."
          />
        </>
      )}
    </>
  )
}

export default CoinBookmarkPage
