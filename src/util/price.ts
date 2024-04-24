import BigNumber from 'bignumber.js'
import { CurrencyType } from '../types/coin'

const priceService = {
  getFormattedPrice: ({
    currency,
    price,
    isPrefix = true,
    fixed = 2,
  }: {
    currency?: CurrencyType
    price: number | string
    isPrefix?: boolean
    fixed?: number
  }) => {
    const prefix = currency === 'krw' ? '₩' : currency === 'usd' ? '$' : ''
    BigNumber.set({
      FORMAT: {
        prefix: isPrefix ? prefix : '',
        groupSize: 3,
        groupSeparator: ',',
        decimalSeparator: '.',
      },
    })
    const formattedPrice = BigNumber(price).toFormat(fixed)

    return formattedPrice
  },
  getFormattedPercentage: ({ percentage }: { percentage: number }) => {
    return (percentage ?? 0).toFixed(2)
  },
}

export default priceService
