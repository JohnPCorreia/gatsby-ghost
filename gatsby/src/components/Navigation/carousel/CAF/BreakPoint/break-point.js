import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayHelpScreen || WrappedComponent.name || 'Component';
}

export default function BreakPointWrapper(breakConfig) {
  return WrappedComponent => {
    class BreakPoint extends PureComponent {
      static propTypes = {
        className: PropTypes.string,
      };

      static defaultProps = {
        className: '',
      };



      constructor(props) {
        super(props);
      }


      render() {
        return <WrappedComponent />
      }
    }

    BreakPoint.displayName = `BreakPoint(${getDisplayName(WrappedComponent)})`;
    return BreakPoint;
  };
}
