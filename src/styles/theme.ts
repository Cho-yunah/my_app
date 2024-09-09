import { Theme } from "@emotion/react";

export interface Theme {
  backgroundColor: string;
  backgroundColorSecondary: string;
  sideBackgroundColor: string,

  textColorPrimary: string;
  textColorSecondary: string;
  textColorGrey: string;
  textColorLightGrey: string;

  borderColorPrimary: string;
  pointColorPrimary: string;
  rippleColor: string;
  hoverColor: string;
  iconBoxColor: string;
}

export const lightTheme:Theme = {
    backgroundColor: '#ffffff',
    backgroundColorSecondary: '#ffffff',
    sideBackgroundColor: '#f9f9f9',

    textColorPrimary: 'rgba(0, 0, 0, 0.87)',
    textColorSecondary:  "#333333", // 약간 밝은 회색
    textColorGrey: "#666666",  // 중간 회색
    textColorGrey2: 'rgba(107, 107, 107, 0.8)',

    borderColorPrimary: "rgba(0,0,0,0.08)", // 더 밝은 회색
    // point color
    pointColorPrimary: "#5c3ef1",
    // side menu bar ripple color
    rippleColor: "rgba(51, 51, 51, 0.2)",
    hoverColor: "rgba(241, 243, 245, 0.4)",

    iconBoxColor: "#f1f3f5"
  };
  
  export const darkTheme: Theme = {
    backgroundColor: '#242424',
    backgroundColorSecondary: '#282828',
    sideBackgroundColor: '#1f1f1f',

    textColorPrimary:  "#ffffff",   // 기본 흰색
    textColorSecondary: "#dddddd", // 약간 어두운 회색
    textColorGrey: "#bbbbbb",  // 중간 회색
    textColorGrey2: "#888888", // 더 어두운 회색

    borderColorPrimary: 'rgba(225, 225, 225, 0.8)',
    // point color
    pointColorPrimary: "#9775fa",
    // side menu bar ripple color
    rippleColor: "rgba(	151,	117,	250, 0.4)",
    hoverColor: "rgba(51, 51, 51, 0.6)",

    iconBoxColor: 'rgba(70, 71, 71, 0.6)'
  };
  