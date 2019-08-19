import React from "react"
import PropTypes from "prop-types"

import { withStyles } from "material-ui/styles"
import ExpansionPanel from "material-ui/ExpansionPanel"
import ExpansionPanelSummary from "material-ui/ExpansionPanel/ExpansionPanelSummary"
import ExpansionPanelDetails from "material-ui/ExpansionPanel/ExpansionPanelDetails"

import Icon from "../../../images/icons/index"

import AccordionStyles from "./accordion.styles"

const Accordion = ({
  classes,
  title,
  children,
  defaultExpanded,
  iconFill,
  ...props
}) => (
  <ExpansionPanel
    className={classes.root}
    defaultExpanded={defaultExpanded}
    {...props}
  >
    <ExpansionPanelSummary
      classes={{ content: classes.summary }}
      expandIcon={<Icon name="expandMore" fill={iconFill} />}
    >
      {title}
    </ExpansionPanelSummary>
    <ExpansionPanelDetails classes={{ root: classes.details }}>
      {children}
    </ExpansionPanelDetails>
  </ExpansionPanel>
)

Accordion.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})])
    .isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({})),
    PropTypes.shape({}),
  ]).isRequired,
  classes: PropTypes.shape({}).isRequired,
  // condensed: PropTypes.bool,
  defaultExpanded: PropTypes.bool,
}

Accordion.defaultProps = {
  // condensed: false,
  defaultExpanded: false,
}

export default withStyles(AccordionStyles)(Accordion)
