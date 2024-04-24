import { ChangeEvent, useState } from 'react'
import { CurrencyType, ViewType } from '../types/coin'
import Loader from '../components/common/Loader'
import constants from '../constants'
import Select from '../components/common/Select'
import CoinTable from '../components/coin-table'
import useCoinMarket from '../hooks/useCoinMarket'
import { useLocation } from 'react-router-dom'

const CoinListPage = () => {
  const location = useLocation()
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyType>(constants.default.market.currency)
  const [selectedPerPage, setSelectedPerPage] = useState<string>(constants.default.market.perPage.toString())
  const [selectedView, setSelectedView] = useState<ViewType>('all')

  const { coins, isLoading, fetchMore, errorMessage } = useCoinMarket({
    currency: selectedCurrency,
    perPage: selectedPerPage,
    view: selectedView,
  })

  const handleCurrency = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCurrency(e.target.value as CurrencyType)
  }

  const handleView = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedView(e.target.value as ViewType)
  }

  const handlePerPage = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPerPage(e.target.value as string)
  }

  return (
    <>
      <div className="mb-2 flex justify-between items-center">
        <div className="text-red-500 font-bold">{errorMessage}</div>
        <div className="flex justify-end gap-2">
          <Select value={selectedView} options={constants.market.filter.view} onChange={handleView} />
          <Select value={selectedCurrency} options={constants.market.filter.currency} onChange={handleCurrency} />
          <Select value={selectedPerPage.toString()} options={constants.market.filter.page} onChange={handlePerPage} />
        </div>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CoinTable
            key={location.pathname}
            coins={coins}
            currency={selectedCurrency}
            emptyMessage="정보를 불러오지 못했습니다."
          />
          {coins.length > 0 ? (
            <div className="flex w-full justify-center h-10 items-center">
              <button onClick={fetchMore}>더보기</button>
            </div>
          ) : null}
        </>
      )}
    </>
  )
}

export default CoinListPage
