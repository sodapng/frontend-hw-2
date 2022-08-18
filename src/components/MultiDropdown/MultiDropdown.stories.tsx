import { ComponentMeta, ComponentStory } from '@storybook/react'

import { MultiDropdown } from './MultiDropdown'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'MultiDropdown',
  component: MultiDropdown,
} as ComponentMeta<typeof MultiDropdown>

const Template: ComponentStory<typeof MultiDropdown> = (args) => (
  <MultiDropdown {...args} />
)

export const _MultiDropdown = Template.bind({})

_MultiDropdown.args = {
  options: [
    { key: 'msk', value: 'Москва' },
    { key: 'spb', value: 'Санкт-Петербург' },
    { key: 'ekb', value: 'Екатеринбург' },
  ],
  pluralizeOptions(elements) {
    return elements.map((el) => el.key).join()
  },
}
