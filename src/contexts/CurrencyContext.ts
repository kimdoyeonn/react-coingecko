import { createContext } from 'react'
import { CurrencyType } from '../types/coin'
import constants from '../constants'

const CurrencyContext = createContext<{
  currency: CurrencyType
  setCurrency: (currency: CurrencyType) => void
}>({ currency: constants.default.market.currency, setCurrency: (currency: CurrencyType) => null })

export default CurrencyContext
