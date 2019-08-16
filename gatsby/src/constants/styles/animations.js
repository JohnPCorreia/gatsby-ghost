import { keyframes } from 'styled-components';
import { COLOR_SCHEMA } from './main';

export const HOVER = keyframes`
  from {
    transform: translateY(0);
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  }
  to {
    transform: translateY(-2px);
    box-shadow: 0 7px 14px rgba(50,50,93,.2), 0 3px 6px rgba(0,0,0,.08);
    filter: brightness(140%);
  }
`;

export const SCALE = keyframes`
    from {
       transform: scale(1.3);
       opacity: 0; 
    } to {
      transform: scale(1);
      opacity: 1;
    }
`;

export const SCALE_BACK = keyframes`
    from {
       transform: scale(1);
       opacity: 1; 
    } to {
      transform: scale(0.8);
      opacity: 0;
    }
`;

export const GROW_FROM_MIDDLE = keyframes`
  from {
     transform: scaleX(0);
  }
  to{
    transform: scaleX(1);
  }
`;

export const DROP = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  50%{
    opacity: 0;
  }
  100%{
    opacity: 1;
    transform: translateY(0)
  }
`;

export const FADE_IN = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

export const FADE_OUT = keyframes`
  from{
    opacity: 1;
  }
  to{
    opacity: 0;
  }
`;

export const TILT_RIGHT = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(25deg);
  }
`;

export const SLIDE_LEFT_TO_RIGHT = keyframes`
  0% {
    transform: translateX(-50%);
    opacity: 0;
  }
  50%{
    opacity: 0;
  }
  100%{
    opacity: 1;
    transform: translateX(0)
  }
`;

export const SLIDE_RIGHT_TO_LEFT = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  50%{
    opacity: 0;
  }
  100%{
    opacity: 1;
    transform: translateX(0)
  }
`;

export const SLIDE_DOWN = keyframes`
  from {
   transform: translateY(-100%);
  }
  to {
   transform: translateY(0);
  }
`;

export const SLIDE_DOWN_OPAC = keyframes`
  0% {
  opacity: 0;
   transform: translateY(-100%);
  }
  50%{
    opacity:0;
  }
  100% {
  opacity: 1;
   transform: translateY(0);
  }
`;

export const SLIDE_UP = keyframes`
  0% {
   transform: translateY(100%);
  }
  100%{
   transform: translateY(0);
  }
`;

export const OPACITY = keyframes`
 0% {
  box-shadow: 0px 0 0 0 ${COLOR_SCHEMA.PRIMARY.DARK_GREY} inset;
  border-right: 0px solid;
  border-color: ${COLOR_SCHEMA.PRIMARY.DARK_GREY};
  color: ${COLOR_SCHEMA.BASIC.WHITE};
 }
 100% {
  box-shadow: 15px 0 0 0 ${COLOR_SCHEMA.PRIMARY.DARK_GREY} inset;
  border-right: 5px solid;
  border-color: ${COLOR_SCHEMA.PRIMARY.DARK_GREY};
  color: ${COLOR_SCHEMA.BASIC.WHITE};
 }
`;

export const TYPE = keyframes`
    from{
      width: 0;
    }
    to{
      width: 100%;
    }
`;

export const BLINK_CARET = keyframes`
  from,
    to { border-color: transparent }
  50% { border-color: orange; }
`;

export const ROTATE_360 = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(359deg);
  }
`;
