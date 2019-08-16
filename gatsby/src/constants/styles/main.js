import { css } from "styled-components"

export const COLOR_SCHEMA = {
  BASIC: {
    BLACK: "#000000",
    BLUE: "#486689",
    GREY: "#848484",
    PURPLE: "#A83B63",
    RED: "#ff5555",
    WHITE: "#FFFFFF",
  },
  GENERAL: {
    BLACK_OPACITY: "#000000B3",
    BLACK_SHADOW: "#00000080",
    BLUE_ASTRAL: "#317F9B",
    BLUE_CATSKILL: "#E7F3F4",
    BLUE_CORNFLOWER: "#CEE7EA",
    BLUE_DARKEN: "#328f9c",
    BLUE_LIGHT: "#ED9E826",
    BLUE_PURPLE: "#3865A9",
    BLUE_RIVER: "#0F2259",
    BLUE_TORY: "#105B92",
    CREAM: "#FFFFCC",
    DARK_GREY: "#313539",
    DARK_MAGENTA: "#902a85",
    GREY_ALTO: "#D8D8D8",
    GREY_ARGYLE: "#00000080",
    GREY_LIGHT: "#FAFAFA",
    GREY_OPACITY: "#E6ECF4B3",
    GREY_TOWER: "#9eb8ba",
    PURPLE_DARK: "#7C3EA9",
    RED_NEON: "#FF0000",
    ROSE_LIGHT: "#F3E8F366",
    ROUGE: "#A73E9B",
    SINBAD: "#9ECED5",
    TEAL_OPAQUE: "#49A994",
    TEAL_TRANSPARENT: "rgba(73, 169, 148, 0)",
    TEAL_TRANSPARENT_35: "rgba(73, 169, 148, 0.35)",
    TEAL_TRANSPARENT_75: "rgba(73, 169, 148, 0.75)",
    TEAL_TRANSPARENT_80: "rgba(73, 169, 148, 0.80)",
    TUNDORA: "#4A4A4A",
    VIOLET_LIGHT: "#6B8DBC",
    WHITE_GREY: "#F7F7F7",
    WHITE_MYSTIC: "#EAF1EF",
  },
  PRIMARY: {
    DARK_GREY: "#1B1F23",
    LIGHT_GREY: "#6F7877",
    PRIMARY_BLUE: "#379DAB",
    SECONDARY_BLUE: "#0F4C59",
    TERTIARY_BLUE: "#DCE8E4",
  },
  SECONDARY: {
    BLUE: "#105B92",
    DARK_BLUE: "#2D1A91",
    DARK_PINK: "#621B91",
    GREEN: "#1D8393",
    PINK: "#902A85",
    RED: "#A62B58",
  },
  UTILITY: {
    DARK_GREY: "#A7ADAC",
    GREEN: "#44A97B",
    GREY: "#E2E2E2",
    RED: "#E54F4F",
    WHITE: "#FCFCFC",
    YELLOW: "#E5E174",
  },
}

export const FONT_SIZE = {
  FONT_STANDARD: "16px",
  FONT_8PX: ".6rem",
  FONT_10PX: ".625rem",
  FONT_11PX: ".688rem",
  FONT_12PX: ".75rem",
  FONT_13PX: "0.813rem",
  FONT_14PX: ".875rem",
  FONT_15PX: ".938rem",
  FONT_16PX: "1rem",
  FONT_17PX: "1.063rem",
  FONT_18PX: "1.125rem",
  FONT_20PX: "1.25rem",
  FONT_22PX: "1.375rem",
  FONT_24PX: "1.5rem",
  FONT_28PX: "1.750rem",
  FONT_30PX: "1.875rem",
  FONT_32PX: "2rem",
  FONT_34PX: "2.125rem",
  FONT_36PX: "2.250rem",
  FONT_38PX: "2.375rem",
  FONT_40PX: "2.500rem",
  FONT_44PX: "2.750rem",
  FONT_48PX: "3.000rem",
  FONT_52PX: "3.250rem",
  FONT_55PX: "3.438rem",
  FONT_80PX: "5rem",
  FONT_104PX: "6.5rem",
}

export const FONT_WEIGHT = {
  EXTRA_BOLD: "800",
  BOLD: "500",
  NORMAL: "400",
  LIGHT: "300",
}

export const PADDING = {
  EXTRA_LARGE: "4rem",
  LARGE_AND_THREE_QUARTERS: "2.75rem",
  LARGE_AND_HALF: "2.5rem",
  LARGE_AND_QUARTER: "2.25rem",
  LARGE: "2rem",
  NORMAL_AND_THREE_QUARTERS: "1.75rem",
  NORMAL_AND_HALF: "1.5rem",
  NORMAL_AND_QUARTER: "1.25rem",
  NORMAL: "1rem",
  THREE_QUARTERS: ".75rem",
  HALF: ".5rem",
  QUARTER: ".25rem",
  FIFTH: ".2rem",
  TENTH: ".1rem",
}

export const SIZE = {
  EXTRA_LARGE: "4rem",
  LARGE_AND_THREE_QUARTERS: "2.75rem",
  LARGE_AND_HALF: "2.5rem",
  LARGE_AND_QUARTER: "2.25rem",
  LARGE: "2rem",
  NORMAL_AND_THREE_QUARTERS: "1.75rem",
  NORMAL_AND_HALF: "1.5rem",
  NORMAL_AND_QUARTER: "1.25rem",
  NORMAL: "1rem",
  THREE_QUARTERS: ".75rem",
  HALF: ".5rem",
  QUARTER: ".25rem",
  FIFTH: ".2rem",
  TENTH: ".1rem",
}

export const INPUT = {
  XSMALL: "128px",
  SMALL: "169px",
  MEDIUM: "230px",
  LARGE: "307px",
  XLARGE: "325px",
  XXLARGE: "803px",
  FULL: "100%",
}

export const POPUP = {
  WIDTH_SMALL: "540px",
  WIDTH_MEDIUM: "740px",
  WIDTH_LARGE: "940px",
  HEIGHT_SMALL: "210px",
  HEIGHT_MEDIUM: "440px",
  HEIGHT_LARGE: "640px",
}

export const ZINDEX = {
  SYSTEM_MESSAGE: "90",
  LOADER: "80",
  MODAL: "70",
  MODAL_OVERLAY: "60",
  TOOLTIP: "50",
  DROPDOWN: "40",
  GLOBAL_NAV: "30", // navbar and footer
}

export const MEDIA_QUERY_SCHEMA = {
  LAPTOP_LARGE: "1440px",
  LAPTOP: "1024px",
  TABLET: "768px",
  MOBILE_LARGE: "425px",
  MOBILE_MEDIUM: "375px",
  MOBILE_SMALL: "320px",
}

export const ContentContainer = css`
  height: 100%;
  margin: 0 auto;
  max-width: 996px;
  width: 100%;
`
