import { ComponentMeta, ComponentStory } from '@storybook/react';
import ExampleCard, { IExampleCard } from './ExampleCard';
import { mockExampleCardProps } from './ExampleCard.mocks';

export default {
  title: 'cards/ExampleCard',
  component: ExampleCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ExampleCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ExampleCard> = (args) => (
  <ExampleCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockExampleCardProps.base,
} as IExampleCard;
