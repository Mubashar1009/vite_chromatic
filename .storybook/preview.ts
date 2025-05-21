import type { Preview } from '@storybook/react'
import { allModes } from './mode';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    viewport: {
      viewports: allModes,
      defaultViewport: allModes.default,
    },
  },
};

export default preview;