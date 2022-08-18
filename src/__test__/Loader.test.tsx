import { Loader } from '../components/Loader/Loader'
import { LoaderSize } from './MockLoader'
import { Locators } from './constants'
import { render, screen } from '@testing-library/react'
import React from 'react'

describe('Тестирование компонента Loader', () => {
  test('По умолчанию рендерится в один html-элемент (возможны потомки)', () => {
    render(
      <div data-testid={Locators.TEST_CONTAINER}>
        <Loader />
      </div>
    )

    const container = screen.getByTestId(Locators.TEST_CONTAINER)

    expect(container.childElementCount).toBe(1)
  })

  test('При передаче loading=false не рендерится ни один html-элемент', () => {
    render(
      <div data-testid={Locators.TEST_CONTAINER}>
        <Loader loading={false} />
      </div>
    )

    const container = screen.getByTestId(Locators.TEST_CONTAINER)

    expect(container.childElementCount).toBe(0)
  })

  test('Переданный className добавляется в список классов лоадера', () => {
    const testClassName = 'test-class'
    render(
      <div data-testid={Locators.TEST_CONTAINER}>
        <Loader className={testClassName} />
      </div>
    )

    const container = screen.getByTestId(Locators.TEST_CONTAINER)

    expect(container.firstChild).toHaveClass(testClassName)
  })

  test('По умолчанию LoaderSize.m', () => {
    const testClassName = 'loader_size-m'
    render(
      <div data-testid={Locators.TEST_CONTAINER}>
        <Loader />
      </div>
    )

    const container = screen.getByTestId(Locators.TEST_CONTAINER)

    expect(container.firstChild).toHaveClass(testClassName)
  })

  test('При изменении size изменяется и className', () => {
    const { rerender } = render(
      <div data-testid={Locators.TEST_CONTAINER}>
        <Loader />
      </div>
    )

    const container = screen.getByTestId(Locators.TEST_CONTAINER)

    expect(container.firstChild).toHaveClass('loader_size-m')

    rerender(
      <div data-testid={Locators.TEST_CONTAINER}>
        <Loader size={LoaderSize.s} />
      </div>
    )

    expect(container.firstChild).toHaveClass('loader_size-s')
  })
})
