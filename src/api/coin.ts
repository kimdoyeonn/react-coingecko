import axios from "axios"

const coingeckoApi = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
})

const Coin = {
  getMarkets: async (params: { currency: 'usd' | 'krw' }) => await coingeckoApi.get('/coins/markets', {
    params: {
      vs_currency : params.currency
    },
  })
}

export default Coin