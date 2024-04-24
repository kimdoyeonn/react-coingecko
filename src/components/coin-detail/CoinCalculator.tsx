import { ChangeEvent, useState } from 'react'
import { CurrencyType } from '../../types/coin'
import BigNumber from 'bignumber.js'

const CoinCalculator = ({
  currency,
  cryptoCurrency,
  exchangeRate,
}: {
  currency: CurrencyType
  cryptoCurrency: string
  exchangeRate: number
}) => {
  const [displayPrices, setDisplayPrices] = useState<{ price: number | string; cryptoPrice: number | string }>({
    price: exchangeRate,
    cryptoPrice: 1,
  })

  BigNumber.set({
    FORMAT: {
      prefix: '',
      decimalSeparator: '.',
      groupSize: 3,
      groupSeparator: ',',
    },
  })

  const handleDisplayPrices = (e: ChangeEvent<HTMLInputElement>, isCrypto: boolean) => {
    const target = e.target.value.replace(/,/g, '')
    const numberTarget = Number(target)

    if (isNaN(numberTarget)) {
      setDisplayPrices({
        price: 0,
        cryptoPrice: 0,
      })
      return
    }
    if (isCrypto) {
      setDisplayPrices({
        price: exchangeRate * numberTarget ?? 0,
        cryptoPrice: target === '' ? 0 : target,
      })
    } else {
      setDisplayPrices({
        price: target === '' ? 0 : target,
        cryptoPrice: Number((numberTarget / exchangeRate).toFixed(8)) ?? 0,
      })
    }
  }

  const getFormattedDecimalNumber = (target: string) => {
    const nums = target.split('.')
    nums[0] = BigNumber(nums[0]).toFormat()
    if (nums[1] !== undefined) {
      nums[1] = nums[1].slice(0, 8)
    }
    return nums.join('.')
  }

  return (
    <div className="p-4 bg-stone-200">
      <div className="font-bold mb-2">가격 계산</div>
      <div className="flex text-center h-10 items-center text-lg gap-2">
        <div className="flex flex-1 items-center">
          <div className="flex-1 font-bold bg-stone-100">{cryptoCurrency.toUpperCase()}</div>
          <div className="flex-[2] bg-white">
            <input
              value={getFormattedDecimalNumber(String(displayPrices.cryptoPrice))}
              className="text-end"
              onChange={(e) => handleDisplayPrices(e, true)}
            />
          </div>
        </div>
        <div>{'<->'}</div>
        <div className="flex flex-1 items-center">
          <div className="flex-1 font-bold bg-stone-100">{currency.toUpperCase()}</div>
          <div className="flex-[2] bg-white">
            <input
              value={BigNumber(displayPrices.price ?? 0).toFormat(0)}
              className="text-end"
              onChange={(e) => handleDisplayPrices(e, false)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoinCalculator
