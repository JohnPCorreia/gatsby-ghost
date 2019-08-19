import React, { PureComponent } from "react"
import PropTypes from "prop-types"

import Accordion from "../Navigation/Accordion/accordion"
import NavDropdown from "./navbar-dropdown.styles"

class NavbarDropdown extends PureComponent {
  renderLargeMenu = () => {
    const { name, submenu, isOpen, handleSubmenu, onClickLink } = this.props

    return (
      <NavDropdown>
        <NavDropdown.menu onFocus={handleSubmenu} onClick={handleSubmenu}>
          {name}
        </NavDropdown.menu>
        {isOpen && (
          <NavDropdown.submenu>
            {submenu.map((item, index) => {
              const composeKey = `${index}-${item}`

              if (item.external) {
                return (
                  <NavDropdown.itemExternal
                    key={composeKey}
                    href={item.url}
                    // onClick={onClickLink}
                  >
                    {item.title}
                  </NavDropdown.itemExternal>
                )
              }

              return (
                <NavDropdown.item
                  key={composeKey}
                  href={item.url}
                  onClick={onClickLink}
                >
                  {item.title}
                </NavDropdown.item>
              )
            })}
          </NavDropdown.submenu>
        )}
      </NavDropdown>
    )
  }

  renderMobileMenu = () => {
    const { name, submenu, handleSubmenu, isOpen, onClickLink } = this.props

    return (
      <NavDropdown.mobile>
        <Accordion
          expanded={isOpen}
          onChange={handleSubmenu}
          title={
            <NavDropdown.accordionTitle>{name}</NavDropdown.accordionTitle>
          }
          iconFill={"white"}
        >
          {submenu.map((item, index) => {
            const composedKey = `${index}-${item}`

            return (
              <NavDropdown.mobile.item
                key={composedKey}
                to={item.url}
                onClick={onClickLink}
              >
                {item.title}
              </NavDropdown.mobile.item>
            )
          })}
        </Accordion>
      </NavDropdown.mobile>
    )
  }

  render() {
    const { isMobile } = this.props

    return (
      <NavDropdown isMobile={isMobile}>
        {isMobile ? this.renderMobileMenu() : this.renderLargeMenu()}
      </NavDropdown>
    )
  }
}

NavbarDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  submenu: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  handleSubmenu: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

export default NavbarDropdown
