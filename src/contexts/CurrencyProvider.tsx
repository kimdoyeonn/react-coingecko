import { ReactNode, useState } from 'react'
import CurrencyContext from './CurrencyContext'
import constants from '../constants'

const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState(constants.default.market.currency)

  return <CurrencyContext.Provider value={{ currency, setCurrency }}>{children}</CurrencyContext.Provider>
}

export default CurrencyProvider
