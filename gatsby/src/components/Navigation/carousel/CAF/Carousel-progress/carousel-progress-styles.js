import styled from 'styled-components';

import { COLOR_SCHEMA, SIZE } from '../../../../../constants/styles/main';

const CardProgress = styled.div`
  height: 2px;
  width: 100%;
  margin: ${SIZE.NORMAL} 0;
`;

CardProgress.track = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  width: 100%;
  height: 2px;
`;

CardProgress.bar = styled.div`
  height: 2px;
  background-color: ${COLOR_SCHEMA.BASIC.WHITE};
  opacity: 1;
  width: ${props => props.barSize}%;
  margin-left: ${props => props.barPosition}%;
`;

export default CardProgress;
