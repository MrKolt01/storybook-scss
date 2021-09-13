import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ScssDiv from "./ScssDiv";


export default {
  title: 'ScssDiv',
  component: ScssDiv,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ScssDiv>;

const Template: ComponentStory<typeof ScssDiv> = (args) => <ScssDiv {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
