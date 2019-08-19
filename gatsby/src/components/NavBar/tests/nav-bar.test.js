import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import NavBar from '../nav-bar';
import NavbarDropdown from '../../NavBarDropdown/navbar-dropdown';

describe('NavBar', () => {
  it('should render the nav bar', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.length).not.toBe(0);
  });

  it('should match snapshot', () => {
    const wrapper = shallow((<NavBar />));
    expect(wrapper).toMatchSnapshot();
  });

  it('should open a submenu when clicked', () => {
    const wrapper = shallow(<NavBar />);
    wrapper.find(NavbarDropdown).find({ name: 'Invest' }).props().handleSubmenu();
    wrapper.update();

    // Can't use a reference to wrapper.find(NavbarDropdown).find({ name: 'Invest' })
    // because wrappers are immutable
    // and won't get updated if the state changes (https://github.com/airbnb/enzyme/issues/1323)
    expect(wrapper.find(NavbarDropdown).find({ name: 'Invest' }).props().isOpen).toBe(true);
  });

  it('should close any open submenus, and open the clicked submenu', () => {
    const wrapper = shallow(<NavBar />);
    wrapper.find(NavbarDropdown).find({ name: 'Invest' }).props().handleSubmenu();
    wrapper.update();
    wrapper.find(NavbarDropdown).find({ name: 'Raise Funds' }).props().handleSubmenu();
    wrapper.update();

    expect(wrapper.find(NavbarDropdown).find({ name: 'Invest' }).props().isOpen).toBe(false);
    expect(wrapper.find(NavbarDropdown).find({ name: 'Raise Funds' }).props().isOpen).toBe(true);
  });
});
