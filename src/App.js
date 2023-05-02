import { ColorModeContext, useMo } from "./theme";
import { CssBaseline, ThemeProvider, Themep } from "@mui/material";
import Topbar from "./scenes/global/topbar";

function App() {
  const [theme, colorMode] = useMode();
  
  return (
    <ColorModeContext.Provider value = {colorMode}>
      <ThemeProvider theme = {theme}>
        <CssBaseline/>

        <div className="app">
          <main className="content"></main>

        </div>
        ;
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
