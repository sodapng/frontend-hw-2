import { Locators } from './constants'
import { WithLoader } from '../components/WithLoader/WithLoader'
import { render, screen } from '@testing-library/react'
import React from 'react'

jest.mock('../components/Loader/Loader.tsx', () => require('./MockLoader'))

describe('Тестирование компонента WithLoader', () => {
  test('При передаче loading=true отображается Loader', () => {
    const { rerender } = render(
      <WithLoader loading>
        <div>content</div>
      </WithLoader>
    )

    const loaderElement = screen.getByTestId(Locators.LOADER)
    expect(loaderElement).toBeVisible()

    rerender(
      <WithLoader loading={false}>
        <div>content</div>
      </WithLoader>
    )

    expect(loaderElement).not.toBeVisible()
  })

  test('Изменение children', () => {
    const { rerender } = render(
      <WithLoader loading={false}>
        <div data-testid="with-loader-old-content">old content</div>
      </WithLoader>
    )

    const contentEl = screen.getByTestId('with-loader-old-content')
    expect(contentEl).toBeVisible()

    rerender(
      <WithLoader loading={false}>
        <div data-testid="with-loader-new-content">content</div>
      </WithLoader>
    )

    const newContentEl = screen.getByTestId('with-loader-new-content')

    expect(newContentEl).toBeVisible()
  })
})
