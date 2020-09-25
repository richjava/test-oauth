import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  // global css variables
  html {
    --color-primary: ${theme.colors.primaryColor};
    --color-primary-contrast: ${theme.colors.colorPrimaryContrast};
    --color-secondary: ${theme.colors.colorSecondary};
    --color-secondary-contrast: ${theme.colors.colorSecondaryContrast};
    --color-background: ${theme.colors.colorBackground};
    --color-background-contrast: ${theme.colors.colorBackgroundContrast};
  }

  //other global styles go here...
  p {color:green}
`;

export default GlobalStyles;