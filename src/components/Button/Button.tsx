import './Button.scss'
import { Loader, LoaderSize } from '../Loader/Loader'
import { clsx } from 'clsx'

/** Возможные раскраски кнопки */
export enum ButtonColor {
  /** Основная, акцентная кнопка */
  primary = 'primary',
  /** Второстепенная кнопка */
  secondary = 'secondary',
}

/** Пропсы, который принимает компонент Button */
export type ButtonProps = React.PropsWithChildren<{
  /**
   * Если true, то внутри кнопки вместе с children отображается компонент Loader
   * Также кнопка должна переходить в состояние disabled
   * По умолчанию - false
   */
  loading?: boolean
  /** Цвет кнопки, по умолчанию -  ButtonColor.primary*/
  color?: ButtonColor
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  color,
  disabled,
  className,
  ...rest
}) => {
  const btnClass = clsx(
    'flex justify-center items-center gap-2 w-40 h-14 rounded-md text-white font-sans text-xl font-bold transition-all',
    'hover:opacity-70',
    `button_color-${color}`,
    {
      button_disabled: disabled || loading,
      'hover:cursor-not-allowed': disabled,
      'hover:cursor-wait': loading,
    },
    className
  )

  const loaderClass = clsx('border-[#C7C7C7] border-r-white')

  return (
    <button className={btnClass} disabled={disabled || loading} {...rest}>
      {loading && <Loader size={LoaderSize.s} className={loaderClass} />}
      {children}
    </button>
  )
}

Button.defaultProps = {
  loading: false,
  color: ButtonColor.primary,
}
