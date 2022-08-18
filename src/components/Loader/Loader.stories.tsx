import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Loader, LoaderSize } from './Loader'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const _Loader = Template.bind({})

_Loader.args = {
  size: LoaderSize.m,
  loading: true,
}
