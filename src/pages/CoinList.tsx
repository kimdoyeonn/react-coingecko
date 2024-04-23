import { ChangeEvent, useState } from 'react'
import { CurrencyType } from '../types/coin'
import Loader from '../components/Loader'
import constants from '../constants'
import Select from '../components/Select'
import CoinTable from '../components/CoinTable'
import useCoinMarket from '../hooks/useCoinMarket'
import { useLocation } from 'react-router-dom'

const CoinListPage = () => {
  const location = useLocation()
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyType>(constants.default.market.currency)
  const [selectedPerPage, setSelectedPerPage] = useState<string>(constants.default.market.perPage.toString())
  const [selectedView, setSelectedView] = useState<'all' | 'bookmark'>('all')

  const { coins, isLoading, fetchMore } = useCoinMarket({
    currency: selectedCurrency,
    perPage: selectedPerPage,
    view: selectedView,
  })

  const handleCurrency = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCurrency(e.target.value as CurrencyType)
  }

  const handleView = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedView(e.target.value as 'all' | 'bookmark')
  }

  const handlePerPage = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPerPage(e.target.value as string)
  }

  return (
    <>
      <div className="flex justify-end gap-2 mb-2">
        <Select value={selectedView} options={constants.market.filter.view} onChange={handleView} />
        <Select value={selectedCurrency} options={constants.market.filter.currency} onChange={handleCurrency} />
        <Select value={selectedPerPage.toString()} options={constants.market.filter.page} onChange={handlePerPage} />
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
          {coins.length === 0 ?? (
            <div className="w-full">
              <button onClick={fetchMore}>더보기</button>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default CoinListPage
