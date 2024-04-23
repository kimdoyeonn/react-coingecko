export type CoinType = {
  ath: number
  ath_change_percentage: number
  ath_date: string
  atl: number
  atl_change_percentage: number
  atl_date: string
  circulating_supply: number
  current_price: number
  fully_diluted_valuation: number
  high_24h: number
  id: string
  image: string
  last_updated: string
  low_24h: number
  market_cap: number
  market_cap_change_24h: number
  market_cap_change_percentage_24h: number
  market_cap_rank: number
  max_supply: number
  name: string
  price_change_24h: number
  price_change_percentage_24h: number
  roi: { times: 'number'; currency: 'string'; percentage: number } | null
  symbol: string
  total_supply: number
  total_volume: number
  price_change_percentage_1h_in_currency: number
  price_change_percentage_24h_in_currency: number
  price_change_percentage_7d_in_currency: number
}

export type CurrencyType = 'krw' | 'usd'

export type CoinDetailType = {
  id: string
  name: string
  symbol: string
  description: {
    ko: string
    en: string
  }
  links: {
    homepage: string[]
  }
  image: {
    thumb: string
    small: string
  }
  localization: {
    ko: string
    en: string
  }
  market_data: {
    current_price: {
      // 현재가격
      [key in CurrencyType | string]: number
    }
    market_cap: {
      // 시가총액
      [key in CurrencyType | string]: number
    }
    total_volume: {
      [key in CurrencyType | string]: number
    }
    price_change_percentage_24h_in_currency: {
      [key in CurrencyType | string]: number
    }
  }
  market_cap_rank: number
}
