import { Fragment } from 'react'
import { Loader } from '../Loader/Loader'
import { clsx } from 'clsx'

/** Пропсы, которые принимает компонент WithLoader */
export type WithLoaderProps = React.PropsWithChildren<{
  loading: boolean
}>

export const WithLoader: React.FC<WithLoaderProps> = ({
  loading,
  children,
}) => {
  if (loading) {
    const container = clsx('flex justify-center items-center w-screen h-screen')

    return (
      <div className={container}>
        <Loader />
      </div>
    )
  }

  return <Fragment>{children}</Fragment>
}
