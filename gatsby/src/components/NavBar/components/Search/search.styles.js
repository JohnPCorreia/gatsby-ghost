import styled from 'styled-components';
import { COLOR_SCHEMA, SIZE } from '../../../../../constants/styles/main';

export const SearchContainer = styled.section`
    flex: 1;
    align-items: center;
`;

export const SearchInput = styled.input`
  appearance: none;
  min-height: 24px;  
  background: transparent;
  color: ${COLOR_SCHEMA.PRIMARY.TERTIARY_BLUE};

  &::before {
    ${Text.REGULAR_BODY};
    content: '\\f002';
    font-family: FontAwesome;
    padding: 0 ${SIZE.NORMAL};
  }
`;
