import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button, ButtonColor } from './Button'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Отправить</Button>
)

export const _Button = Template.bind({})

_Button.args = {
  color: ButtonColor.primary,
  loading: false,
  disabled: false,
}
