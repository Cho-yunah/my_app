import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    backgroundColor: string;
    backgroundColorSecondary: string;
    sideBackgroundColor: string;

    textColorPrimary: string;
    textColorSecondary: string;
    textColorGrey: string;
    textColorGrey2: string;

    borderColorPrimary: string;
    pointColorPrimary: string;
    hoverColor: string;
    rippleColor: string;
    iconBoxColor: string;
  }
}
