import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import NavBarDialog from '../NavBarDialog';

describe('NavBarDialog', () => {
  describe('Rendering', () => {
    it('should render', () => {
      const wrapper = shallow(
        <NavBarDialog />
      );

      expect(wrapper.length).not.toBe(0);
    });

    it('should match the snap shot', () => {
      const wrapper = renderer.create(
        <NavBarDialog />
      );

      expect(wrapper).toMatchSnapshot();
    });
  });
});