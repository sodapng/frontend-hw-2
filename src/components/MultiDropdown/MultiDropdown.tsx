import { Fragment, useState } from 'react'
import { clsx } from 'clsx'

/** Вариант для выбора в фильтре */
export type Option = {
  /** Ключ варианта, используется для отправки на бек/использования в коде */
  key: string
  /** Значение варианта, отображается пользователю */
  value: string
}

/** Пропсы, которые принимает компонент Dropdown */
export type MultiDropdownProps = {
  /** Массив возможных вариантов для выбора */
  options: Option[]
  /** Текущие выбранные значения поля, массив может быть пустым */
  value: Option[]
  /** Callback, вызываемый при выборе варианта */
  onChange: (value: Option[]) => void
  /** Заблокирован ли дропдаун */
  disabled?: boolean
  /** Преобразовать выбранные значения в строку. Отображается в дропдауне в качестве выбранного значения */
  pluralizeOptions: (value: Option[]) => string
}

export const MultiDropdown: React.FC<MultiDropdownProps> = ({
  options,
  value,
  onChange,
  disabled,
  pluralizeOptions,
}) => {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen(!open)

  const handleOnClickForOption = (data: Option) => {
    const isFound = value.some(({ key }) => key === data.key)

    if (isFound) {
      value = value.filter(({ key }) => key !== data.key)
      onChange(value)
    } else {
      value.push(data)
      onChange([data])
    }
  }

  const select = clsx(
    'flex items-center justify-between gap-3 rounded-md border-2 px-3 py-3 hover:cursor-pointer',
    {
      'border-blue-300': open,
      'pointer-events-none': disabled,
    }
  )

  const option = (key: string) =>
    clsx('truncate px-3 py-1 hover:cursor-pointer hover:bg-blue-200', {
      'bg-blue-100': value.some((el) => el.key === key),
    })

  return (
    <div className="w-80">
      <div onClick={toggle} className={select}>
        <span className="truncate">{pluralizeOptions(value)}</span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-5 w-[1.5px] bg-slate-300"></span>
          👇
        </span>
      </div>
      {!disabled && open && (
        <ul className="mt-1 rounded-md border py-1 shadow-md">
          {options.length ? (
            options.map(({ key, value }) => {
              return (
                <Fragment key={key}>
                  <li
                    onClick={() => handleOnClickForOption({ key, value })}
                    className={option(key)}
                  >
                    {value}
                  </li>
                </Fragment>
              )
            })
          ) : (
            <div className="p-1 text-center text-zinc-500">No options...</div>
          )}
        </ul>
      )}
    </div>
  )
}

MultiDropdown.defaultProps = {
  value: [],
}
