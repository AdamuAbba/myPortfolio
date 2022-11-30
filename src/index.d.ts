declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      primary: {
        main: string;
      };
      secondary: {
        main: string;
      };
    };
    typography: {
      fontFamily: [];
      h1: {
        fontWeight: number;
      };
      h2: {
        fontWeight: number;
      };
      h3: {
        fontWeight: number;
      };
      h6: {
        color: string;
        textShadow: string;
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    palette?: {
      primary?: {
        main?: string;
      };
      secondary?: {
        main?: string;
      };
    };
    typography?: {
      fontFamily: [];
      h1?: {
        fontWeight?: number;
      };
      h2?: {
        fontWeight?: number;
      };
      h3?: {
        fontWeight?: number;
      };
      h6?: {
        color?: string;
        textShadow?: string;
      };
    };
  }
}
