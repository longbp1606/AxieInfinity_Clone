import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GlobalStyles from './themes/globalStyles.js'
import { ThemeProvider } from 'styled-components'
import { ConfigProvider, App as AppAntd } from 'antd'
import { createStyledBreakpoints } from 'styled-breakpoints/styled-breakpoints/index.js'
import { AntdThemeConfig } from './themes/index.js'

export const breakpoints = {
  xs: '360px',
  sm: '576px',
  md: '768px',
  lg: '99xpx',
  xl: '1200px',
  xxl: '1400px'
};

const theme = createStyledBreakpoints({
  breakpoints,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ConfigProvider theme={AntdThemeConfig}>
        <AppAntd>
          <App />
          <GlobalStyles />
        </AppAntd>
      </ConfigProvider>
    </ThemeProvider>
  </StrictMode>,
)
