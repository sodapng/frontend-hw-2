import { ComponentMeta, ComponentStory } from '@storybook/react'

import { WithLoader } from './WithLoader'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'WithLoader',
  component: WithLoader,
} as ComponentMeta<typeof WithLoader>

const Template: ComponentStory<typeof WithLoader> = (args) => (
  <WithLoader {...args}></WithLoader>
)

export const _WithLoader = Template.bind({})

_WithLoader.args = {
  loading: true,
  children: <h1>Hello, World!</h1>,
}
