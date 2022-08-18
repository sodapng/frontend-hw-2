import { Card } from './Card'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const CardRegular = Template.bind({})

CardRegular.args = {
  image:
    'https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Internet-chrome-icon.png',
  title: 'kts-school-frontend',
  subtitle: 'ktsstudio',
}

export const CardWithContent = Template.bind({})

CardWithContent.args = {
  image:
    'https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Internet-chrome-icon.png',
  title: 'kts-school-frontend',
  subtitle: 'ktsstudio',
  content: <h1>Hello, World!</h1>,
}

export const CardClick = Template.bind({})

CardClick.args = {
  image:
    'https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Internet-chrome-icon.png',
  title: 'kts-school-frontend',
  subtitle: 'ktsstudio',
  onClick: () => alert('Hello'),
}
