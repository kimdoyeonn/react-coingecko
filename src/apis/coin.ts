import axios from 'axios'
import constants from '../constants'

const coingeckoApi = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
})

const Coin = {
  getMarkets: async (params: { currency: 'usd' | 'krw'; perPage?: number; ids?: string; page?: number }) =>
    await coingeckoApi.get('/coins/markets', {
      params: {
        vs_currency: params.currency ?? constants.default.market.currency,
        order: constants.default.market.order,
        price_change_percentage: constants.default.market.priceChangePercentage,
        per_page: params.perPage ?? constants.default.market.perPage,
        page: params.page ?? 1,
        ...(params.ids ? { ids: params.ids } : {}),
      },
    }),
  getCoinDetail: async (params: { id: string }) =>
    await coingeckoApi.get(`/coins/${params.id}`, {
      params: {
        tickers: false,
        community_data: false,
        developer_data: false,
        sparkline: false,
      },
    }),
}

export default Coin
