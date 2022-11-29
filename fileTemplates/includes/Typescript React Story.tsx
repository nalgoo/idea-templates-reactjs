import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ${NAME} } from './${NAME}';

type Story = StoryObj<typeof ${NAME}>;

export default {
	title: '${NAME}',
	component: ${NAME},
	parameters: {
		layout: 'padded',
	},
	argTypes: {},
} as Meta<typeof ${NAME}>;

export const Simple: Story = {
	args: {
		children: <div />,
	},
};
