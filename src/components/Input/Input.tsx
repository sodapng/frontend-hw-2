import { clsx } from 'clsx'

import './Input.scss'

/** Пропсы, которые принимает компонент Input */
export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  /** Значение поля */
  value: string
  /** Callback, вызываемый при вводе данных в поле */
  onChange: (value: string) => void
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  disabled,
  className,
  ...props
}) => {
  const inputClass = clsx(
    'w-60 h-12 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm',
    'invalid:border-pink-500 invalid:text-pink-600',
    'focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500',
    'disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none',
    { input_disabled: disabled },
    className
  )

  return (
    <input
      type="text"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={inputClass}
      disabled={disabled}
      {...props}
    />
  )
}
