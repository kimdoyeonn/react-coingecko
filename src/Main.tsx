import React, { useEffect, useState } from 'react'
import './Main.css'
import Coin from './api/coin'
import GNB from './components/GNB'

type CoinType = {
  ath: number
  ath_change_percentage: number
}

function Main() {
  const [coins, setCoins] = useState([])
  useEffect(() => {
    const fetchCoinMarkets = async () => {
      try {
        const coins = await Coin.getMarkets({ currency: 'usd' })
        console.log(coins)
        setCoins(coins.data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchCoinMarkets()
  }, [])

  return (
    <div>
      <GNB />
    </div>
  )
}

export default Main
