import React from 'react';
import PropTypes from 'prop-types';

import FundopolisNavBar from './fundopolis-navbar';
import TimeMagazine from './time';
import TechCrunch from './techcrunch';
import FastCompany from './fast-company';
// import BusinessInsider from './business-insider';
// import Cismontane from './cismontane';

const Logo = (props) => {
 switch (props.name) {
   case 'navbar-fundopolis':
     return <FundopolisNavBar {...props} />;
   case 'time-magazine':
     return <TimeMagazine {...props} />;
   case 'techcrunch':
     return <TechCrunch {...props} />;
   case 'fast-company':
     return <FastCompany {...props} />;
  //  case 'business-insider':
  //    return <BusinessInsider {...props} />;
  //  case 'cismontane':
  //    return <Cismontane {...props} />;
   default:
     break;
 }
};

Logo.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Logo;
