import React from 'react';
import { storiesOf } from '@storybook/react';

// import storybook addons
import { withKnobs } from '@storybook/addon-knobs/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import centered from '@storybook/addon-centered'; // to center elements

import Accordion from './accordion';

storiesOf('Accordion', module)
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('default', () => (
    <Accordion
      title={'demo header'}
    >
      <div>Test</div>
    </Accordion>
  ))
  .add('condensed', () => (
    <Accordion
      condensed
      title={'demo header'}
    >
      <div>Test</div>
    </Accordion>
  ));
