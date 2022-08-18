import './Loader.scss'
import { Fragment } from 'react'
import { clsx } from 'clsx'

/** Возможные значения размера лоадера */
export enum LoaderSize {
  s = 's',
  m = 'm',
  l = 'l',
}

/** Пропсы, которые принимает компонент Loader */
type LoaderProps = {
  /**
   * Идет ли загрузка.
   * По умолчанию - true, для удобства использования
   * Если false, то лоадер не должен отображаться
   */
  loading?: boolean
  /**
   * Размер лоадера. При передаче данного пропса, должен добавляться css-класс loader_size-{size}
   * По умолчанию: размер - LoaderSize.m, css-класс - loader_size-m
   */
  size?: LoaderSize
  /**
   * Дополнительные CSS-классы.
   */
  className?: string
}

export const Loader: React.FC<LoaderProps> = ({ loading, size, className }) => {
  const loaderClass = clsx(
    'inline-block border-solid rounded-full animate-spin',
    'loader',
    `loader_size-${size}`,
    className
  )

  return <Fragment>{loading && <span className={loaderClass} />}</Fragment>
}

Loader.defaultProps = {
  loading: true,
  size: LoaderSize.m,
}
