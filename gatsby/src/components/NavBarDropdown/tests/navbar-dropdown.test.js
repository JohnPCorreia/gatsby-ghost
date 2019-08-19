import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import NavbarDropdown from '../navbar-dropdown';
import NavDropdown from '../navbar-dropdown.styles';

const handleSubmenu = jest.fn();

describe('NavbarDropdown', () => {
  describe('Rendering', () => {
    it('should render', () => {
      const wrapper = shallow(
        <NavbarDropdown
          name={'name'}
          submenu={
            [{
              url: 'url',
              title: 'title',
            }]
          }
          handleSubmenu={handleSubmenu}
          isOpen={false}
        />,
      );

      expect(wrapper.length).not.toBe(0);
    });

    it('should match the snap shot', () => {
      const wrapper = renderer.create(
        <NavbarDropdown
          name={'name'}
          submenu={
            [{
              url: 'url',
              title: 'title',
            }]
          }
          handleSubmenu={handleSubmenu}
          isOpen={false}
        />,
      ).toJSON();

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Events', () => {
    describe('handleSubmenu', () => {
      it('should call the supplied function on click', () => {
        const wrapper = shallow(
          <NavbarDropdown
            name={'name'}
            submenu={
              [{
                url: 'url',
                title: 'title',
              }]
            }
            handleSubmenu={handleSubmenu}
            isOpen={false}
          />,
        );

        wrapper.find(NavDropdown.menu).props().onClick();
        expect(handleSubmenu).toHaveBeenCalled();
      });

      it('should call the supplied function on focus', () => {
        const wrapper = shallow(
          <NavbarDropdown
            name={'name'}
            submenu={
              [{
                url: 'url',
                title: 'title',
              }]
            }
            handleSubmenu={handleSubmenu}
            isOpen={false}
          />,
        );

        wrapper.find(NavDropdown.menu).props().onFocus();
        expect(handleSubmenu).toHaveBeenCalled();
      });
    });
  });
});
