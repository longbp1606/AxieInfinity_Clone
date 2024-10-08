import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import GlobalStyles from "./themes/globalStyles.js";
import { ThemeProvider } from "styled-components";
import { ConfigProvider, App as AppAntd } from "antd";
import { createStyledBreakpointsTheme } from "styled-breakpoints";
import { AntdThemeConfig } from "./themes/index.js";
import "animate.css";

export const breakpoints = {
  xs: "385px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px",
};

const theme = createStyledBreakpointsTheme({
  breakpoints,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ConfigProvider theme={AntdThemeConfig}>
        <AppAntd>
          <App />
          <GlobalStyles />
        </AppAntd>
      </ConfigProvider>
    </ThemeProvider>
  </StrictMode>
);
