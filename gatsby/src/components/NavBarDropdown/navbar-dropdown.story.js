import React from 'react';
import { storiesOf } from '@storybook/react';

// import storybook addons
import { withKnobs, selectV2 } from '@storybook/addon-knobs/react';
import { withNotes, withMarkdownNotes } from '@storybook/addon-notes';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import centered from '@storybook/addon-centered'; // to center elements

import NavbarDropdown from './navbar-dropdown';

const items = [
  {
    title: 'Funder FAQ',
    url: 'http://www.google.com',
  },
  {
    title: 'List of Raises',
    url: 'http://www.google.com',
  },
];

storiesOf('NavbarDropdown', module)
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('default', () => (
    <NavbarDropdown
      name="Invest"
      submenu={items}
    />
));
