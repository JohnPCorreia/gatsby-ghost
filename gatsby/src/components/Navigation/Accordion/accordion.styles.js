import { FONT_WEIGHT } from '../../../constants/styles/main';
import COLORS from './constants/accordion.colors';

const AccordionStyles = () => ({
  root: {
    borderRadius: '0px',
    borderStyle: 'solid',
    borderWidth: '0px 0px 1px',
    borderColor: COLORS.BORDER,
    boxShadow: 'none',
    backgroundColor: 'transparent',
    width: 'inherit',
  },
  summary: {
    fontWeight: FONT_WEIGHT.NORMAL,
    color: COLORS.SUMMARY,
  },
  details: {
    fontWeight: FONT_WEIGHT.NORMAL,
    color: COLORS.DETAILS,
    display: 'flex',
    flexDirection: 'column',
  },
});

export default AccordionStyles;
