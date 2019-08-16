import { css } from 'styled-components';

import { COLOR_SCHEMA } from './main';

export const foreground = css`
  background: linear-gradient(
      180deg,
      ${COLOR_SCHEMA.GENERAL.TEAL_OPAQUE} 0%,
      ${COLOR_SCHEMA.GENERAL.TEAL_TRANSPARENT} 100%
    ),
    linear-gradient(90deg, ${COLOR_SCHEMA.GENERAL.BLUE_RIVER} 0%, ${COLOR_SCHEMA.GENERAL.BLUE_ASTRAL} 100%);
`;

export const foregroundTopRight = css`
  background: linear-gradient(
      to bottom,
      ${COLOR_SCHEMA.GENERAL.TEAL_TRANSPARENT_80} 0%,
      ${COLOR_SCHEMA.GENERAL.TEAL_TRANSPARENT} 100%
    ),
    linear-gradient(to right, ${COLOR_SCHEMA.GENERAL.BLUE_RIVER} 0%, ${COLOR_SCHEMA.GENERAL.BLUE_ASTRAL} 100%);
`;

export const foregroundAlt = css`
  background: linear-gradient(
      to left top,
      ${COLOR_SCHEMA.GENERAL.TEAL_OPAQUE} 0%,
      ${COLOR_SCHEMA.GENERAL.TEAL_TRANSPARENT} 100%
    ),
    linear-gradient(
      to bottom right,
      ${COLOR_SCHEMA.GENERAL.BLUE_RIVER} 0%,
      ${COLOR_SCHEMA.GENERAL.BLUE_ASTRAL} 100%
    );
`;

export const headerForeground = css`
  background: linear-gradient(to left, #0f2259, #317f9b),
    linear-gradient(to bottom, #49a994, rgba(73, 169, 148, 0)), linear-gradient(#0f4c59, #0f4c59);
`;

export const headerForegroundAlt = css`
  background-image: linear-gradient(to bottom, #49a994, rgba(73, 169, 148, 0)),
    linear-gradient(to right, #0f2259, #317f9b);
`;

export const logoForeground = css`
  background-image: linear-gradient(to bottom, #49a994, rgba(73, 169, 148, 0)),
    linear-gradient(to left, #0f2259, #317f9b), linear-gradient(#0f4c59, #0f4c59);
`;

export const popupForeground = css`
  background-image: linear-gradient(to bottom, #49a994, rgba(73, 169, 148, 0)),
    linear-gradient(to right, #0f2259, #317f9b);
`;

export const meshForeground = css`
  background-image: linear-gradient(
      315deg,
      rgba(73, 169, 148, 0.45) 0%,
      ${COLOR_SCHEMA.GENERAL.TEAL_TRANSPARENT} 35%
    ),
    linear-gradient(225deg, rgba(73, 169, 148, 0.95) 0%, ${COLOR_SCHEMA.GENERAL.TEAL_TRANSPARENT} 75%),
    linear-gradient(to bottom left, rgba(15, 34, 39, 0.8) 0%, rgba(15, 34, 89, 1) 55%);
`;

export const marginalizedBody = css`
  @media screen and (max-width: 768px) {
    max-width: 750px;
  }

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    max-width: 1000px;
  }
`;

export const onBreakLeftToCenter = css`
  /* Custom, iPhone Retina */
  @media only screen and (min-width: 320px) {
    justify-content: center;
  }

  /* Extra Small Devices, Phones */
  @media only screen and (min-width: 480px) {
    justify-content: center;
  }

  /* Small Devices, Tablets */
  @media only screen and (min-width: 678px) {
    justify-content: flex-start;
  }

  /* Medium Devices, Desktops */
  @media only screen and (min-width: 992px) {
    justify-content: flex-start;
  }

  /* Large Devices, Wide Screens */
  @media only screen and (min-width: 1200px) {
    justify-content: flex-start;
  }
`;

export const gradientDarkBlue = css`
  background: linear-gradient(90deg, ${COLOR_SCHEMA.GENERAL.BLUE_PURPLE} 0%, ${COLOR_SCHEMA.GENERAL.PURPLE_DARK} 100%);
`;

export const gradientPurple = css`
  background: linear-gradient(90deg, ${COLOR_SCHEMA.GENERAL.ROUGE} 0%, ${COLOR_SCHEMA.GENERAL.PURPLE_DARK} 100%);
`;

export const gradientBlue = css`
  background: linear-gradient(
    90deg,
    ${COLOR_SCHEMA.GENERAL.VIOLET_LIGHT} 0%,
    ${COLOR_SCHEMA.SECONDARY.DARK_BLUE} 100%
  );
`;
