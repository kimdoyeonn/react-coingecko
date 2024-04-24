import { ChangeEvent } from 'react'

const Select = ({
  value,
  options,
  onChange,
}: {
  value: string
  options: { value: string; content: string }[]
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}) => {
  return (
    <>
      <select
        defaultValue={value}
        className="bg-gray-50 border border-gray-300 text-sm rounded-lg block p-2.5 "
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.content}
          </option>
        ))}
      </select>
    </>
  )
}

export default Select
