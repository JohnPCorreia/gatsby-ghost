import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Accordion from '../accordion';

jest.mock('material-ui/ExpansionPanel', () => 'ExpansionPanel');
jest.mock('material-ui/ExpansionPanel/ExpansionPanelSummary', () => 'ExpansionPanelSummary');
jest.mock('material-ui/ExpansionPanel/ExpansionPanelDetails', () => 'ExpansionPanelDetails');

describe('Accordion', () => {
  describe('Rendering', () => {
    it('should render the accordion', () => {
      const wrapper = shallow(<Accordion title={'Foo'}><div>Bar</div></Accordion>);
      expect(wrapper.length).not.toBe(0);
    });

    it('should match snapshot', () => {
      const wrapper = renderer.create(<Accordion title={'Bar'}><div>Foo</div></Accordion>).toJSON();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
