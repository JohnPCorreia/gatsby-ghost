import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormLogin } from '../form-login';
import FormLoginStyled from '../form-login.styles';

jest.mock('material-ui/ButtonBase', () => 'ButtonBase');

describe('FormLogin', () => {
  describe('Rendering', () => {
    it('should render', () => {
      const wrapper = shallow(
        <FormLogin
          history={[]}
        />,
      );

      expect(wrapper.length).not.toBe(0);
    });

    it('should match the snap shot', () => {
      const wrapper = renderer.create(
        <FormLogin
          history={[]}
        />,
      ).toJSON();

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Events', () => {
    describe('handleSignUp', () => {
      it('should redirect to the register page', () => {
        const history = [];
        const wrapper = shallow(
          <FormLogin
            history={history}
          />,
        );

        wrapper.find(FormLoginStyled.link).props().onClick();

        expect(history[0]).toEqual('/register');
      });
    });
  });
});
