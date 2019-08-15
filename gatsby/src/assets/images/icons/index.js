import React from 'react';
import PropTypes from 'prop-types';

import Confident from './confident';
import Connected from './connected';
import Conversation from './conversation';
import Cross from './cross';
import Facebook from './facebook';
import HeartHand from './heart-hand';
import Ideas from './ideas';
import Instagram from './instagram';
import Linkedin from './linkedin';
import LinkBroken from './link-broken';
import People from './people';
import Supported from './supported';
import ThumbsUp from './thumbs-up';
import Tools from './tools';
import Twitter from './twitter';
import Welcome from './welcome';
import ExpandMore from './expandMore';
import Menu from './menu';
import Close from './close';

import ArtsCulture from './artsCulture';
import ChildWelfare from './childWelfare';
import Community from './community';
import Education from './education';
import FoodAgri from './foodAgri';
import GreenLiving from './greenLiving';
import Health from './health';
import NonProfit from './nonProfit';
import SocialJustice from './socialJustice';
import Sustainability from './sustainability';
import Veteran from './veteran';
import WomanOwned from './womanOwned';

const Icon = (props) => {
  switch (props.name) {
    case 'heart':
      return <HeartHand {...props} />;
    case 'confident':
      return <Confident {...props} />;
    case 'conversation':
      return <Conversation {...props} />;
    case 'cross':
      return <Cross {...props} />;
    case 'supported':
      return <Supported {...props} />;
    case 'connected':
      return <Connected {...props} />;
    case 'welcome':
      return <Welcome {...props} />;
    case 'tools':
      return <Tools {...props} />;
    case 'linkbroken':
      return <LinkBroken {...props} />;
    case 'people':
      return <People {...props} />;
    case 'ideas':
      return <Ideas {...props} />;
    case 'instagram':
      return <Instagram {...props} />;
    case 'twitter':
      return <Twitter {...props} />;
    case 'thumbsup':
      return <ThumbsUp {...props} />;
    case 'facebook':
      return <Facebook {...props} />;
    case 'linkedin':
      return <Linkedin {...props} />;
    case 'expandMore':
      return <ExpandMore {...props} />;
    case 'menu':
      return <Menu {...props} />;
    case 'close':
      return <Close {...props} />;
    case 'ARTS_AND_CULTURE':
      return <ArtsCulture {...props} />;
    case 'CHILD_WELFARE':
      return <ChildWelfare {...props} />;
    case 'COMMUNITY':
      return <Community {...props} />;
    case 'EDUCATION':
      return <Education {...props} />;
    case 'FOOD_AND_AGRI':
      return <FoodAgri {...props} />;
    case 'GREEN_LIVING':
      return <GreenLiving {...props} />;
    case 'HEALTH':
      return <Health {...props} />;
    case 'NON_PROFIT':
      return <NonProfit {...props} />;
    case 'SOCIAL_JUSTICE':
      return <SocialJustice {...props} />;
    case 'SUSTAINABILITY':
      return <Sustainability {...props} />;
    case 'VETERAN':
      return <Veteran {...props} />;
    case 'WOMAN_OWNED':
      return <WomanOwned {...props} />;
    default:
      break;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
