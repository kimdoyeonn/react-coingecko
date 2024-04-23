import { CurrencyType } from '../types/coin'

const priceService = {
  getFormattedPrice: ({ currency, price }: { currency: CurrencyType; price: number }) => {
    const prefix = currency === 'krw' ? '₩' : currency === 'usd' ? '$' : ''
    const formattedPrice = price
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      .replace('.00', '')

    return prefix + formattedPrice
  },
  getFormattedPercentage: ({ percentage }: { percentage: number }) => {
    return (percentage ?? 0).toFixed(2)
  },
}

export default priceService
