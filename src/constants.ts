import { CurrencyType } from './types/coin'

const constants = {
  default: {
    market: {
      currency: 'krw' as CurrencyType,
      perPage: 50,
      order: 'market_cap_desc',
      priceChangePercentage: '1h,24h,7d',
    },
  },
  market: {
    key: 'market',
    filter: {
      view: [
        { value: 'all', content: '전체보기' },
        { value: 'bookmark', content: '북마크보기' },
      ],
      page: [
        { value: '10', content: '10개 보기' },
        { value: '30', content: '30개 보기' },
        { value: '50', content: '50개 보기' },
      ],
      currency: [
        { value: 'krw', content: 'KRW 보기' },
        { value: 'usd', content: 'USD 보기' },
      ],
    },
  },
  bookmark: {
    key: 'bookmark',
    toast: {
      add: '북마크가 추가되었습니다.',
      remove: '북마크가 제거되었습니다.',
    },
  },
}

export default constants
