import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'

import { Input, InputProps } from './Input'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>

const WrappedInput: React.FC<InputProps> = ({ value, onChange, ...props }) => {
  const [$value, setValue] = useState(value || '')

  const handleChange = (value: string): void => {
    setValue(value)
    onChange(value)
  }

  return <Input value={$value} onChange={handleChange} {...props} />
}

const Template: ComponentStory<typeof WrappedInput> = (args) => (
  <WrappedInput {...args} />
)

export const _Input = Template.bind({})

_Input.args = {
  value: 'п',
  onChange(value) {
    console.log(value)
  },
}
