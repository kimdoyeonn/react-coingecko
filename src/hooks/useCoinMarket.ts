import { useEffect, useState } from 'react'
import { CoinType, CurrencyType, ViewType } from '../types/coin'
import Coin from '../apis/coin'
import useBookmark from './useBookmark'
import axios from 'axios'

const useCoinMarket = ({
  currency,
  perPage = 100,
  view = 'all',
}: {
  currency: CurrencyType
  perPage?: number | string
  view: ViewType
}) => {
  const [coins, setCoins] = useState<CoinType[]>([] as CoinType[])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { bookmarks } = useBookmark()
  const [page, setPage] = useState(1)
  const [errorMessage, setErrorMessage] = useState('')

  const fetchMore = () => {
    setPage((prev) => prev + 1)
  }

  useEffect(() => {
    const fetchCoinMarkets = async () => {
      try {
        const coins = await Coin.getMarkets({
          currency,
          perPage: Number(perPage),
          page,
          ...(view === 'bookmark' ? { ids: bookmarks.join(',') } : {}),
        })
        if (page === 1) {
          setCoins(coins.data)
        } else {
          setCoins((prev) => [...prev, ...coins.data])
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setErrorMessage(err.message)
        }
      } finally {
        setIsLoading(false)
      }
    }
    fetchCoinMarkets()
    return () => {
      setIsLoading(true)
    }
  }, [view, currency, perPage, page])

  return { coins, isLoading, fetchMore, errorMessage }
}

export default useCoinMarket
