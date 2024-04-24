import { ChangeEvent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BookmarkButton from '../components/BookmarkButton'
import useBookmark from '../hooks/useBookmark'
import { CoinDetailType, CurrencyType } from '../types/coin'
import constants from '../constants'
import Select from '../components/common/Select'
import priceService from '../util/price'
import CoinDescription from '../components/coin-detail/CoinDescription'
import CoinCalculator from '../components/coin-detail/CoinCalculator'
import Coin from '../apis/coin'
import Loader from '../components/common/Loader'

const CoinDetailPage = () => {
  const { id } = useParams()

  if (id === undefined) {
    return null
  }
  const [isLoading, setIsLoading] = useState(true)
  const [coin, setCoin] = useState<CoinDetailType | null>(null)
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyType>(constants.default.market.currency)

  useEffect(() => {
    const fetchCoinMarkets = async () => {
      try {
        const coin = await Coin.getCoinDetail({ id })
        setCoin(coin.data)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchCoinMarkets()
    return () => {
      setIsLoading(true)
    }
  }, [id])

  if (coin === null) {
    return null
  }

  const handleCurrency = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCurrency(e.target.value as CurrencyType)
  }

  const getPrice = (price: number) => {
    return priceService.getFormattedPrice({ currency: selectedCurrency, price })
  }

  const getPercentage = (percentage: number) => {
    return priceService.getFormattedPercentage({ percentage })
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="p-5">
          <div className="flex justify-between mb-6">
            <div className="flex items-center gap-4">
              <BookmarkButton id={coin.id} size={30} />
              <img src={coin.image.small} />
              <div className="text-2xl font-bold">
                {coin.localization.ko} ({coin.symbol.toUpperCase()})
              </div>
            </div>
            <div>
              <Select value={selectedCurrency} options={constants.market.filter.currency} onChange={handleCurrency} />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="border">
              <div className="grid grid-cols-2 items-center border-b">
                <div className="bg-stone-200 p-4 font-bold">시가총액 Rank</div>
                <div className="p-4">Rank #{coin.market_cap_rank}</div>
              </div>
              <div className="grid grid-cols-2 items-center">
                <div className="bg-stone-200 p-4 font-bold">웹사이트</div>
                <div className="p-4">{coin.links.homepage[0]}</div>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex justify-end gap-4">
                <div className="flex flex-col justify-end items-end">
                  <div className="text-end text-2xl font-bold">
                    {priceService.getFormattedPrice({
                      price: coin.market_data.current_price[selectedCurrency],
                      currency: selectedCurrency,
                    })}
                  </div>
                  <div className="text-end text-gray-500">
                    {coin.market_data.current_price[coin.symbol]} {coin.symbol.toUpperCase()}
                  </div>
                </div>
                <div className="flex flex-col justify-end">
                  <div
                    className={
                      'font-bold text-lg' +
                      (coin.market_data.price_change_percentage_24h_in_currency[selectedCurrency] > 0
                        ? ' rise'
                        : ' fall')
                    }
                  >
                    {getPercentage(coin.market_data.price_change_percentage_24h_in_currency[selectedCurrency])}%
                  </div>
                  <div
                    className={
                      coin.market_data.price_change_percentage_24h_in_currency[selectedCurrency] > 0 ? 'rise' : 'fall'
                    }
                  >
                    {getPercentage(coin.market_data.price_change_percentage_24h_in_currency[coin.symbol])}%
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 text-end">
                <div>
                  <div>시가총액</div>
                  <div>{getPrice(coin.market_data.market_cap?.[selectedCurrency])}</div>
                </div>
                <div>
                  <div>24시간 거래대금</div>
                  <div>{getPrice(coin.market_data.total_volume[selectedCurrency])}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <CoinCalculator
              currency={selectedCurrency}
              cryptoCurrency={coin.symbol}
              exchangeRate={coin.market_data.current_price[selectedCurrency]}
            />
          </div>
          {coin.description.ko !== '' && coin.description.en !== '' ? (
            <CoinDescription description={coin.description.ko ?? coin.description.en} />
          ) : null}
        </div>
      )}
    </>
  )
}

export default CoinDetailPage
