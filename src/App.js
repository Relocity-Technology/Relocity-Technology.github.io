import './App.css';
import Cover from './ui/Cover';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import DrawerAppBar from './ui/DrawerAppBar';
import WhyRelocity from './ui/WhyRelocity';
import "@fontsource/red-hat-display"
import "@fontsource/red-hat-display/400.css"
import "@fontsource/red-hat-display/400-italic.css"
import "@fontsource/red-hat-display/500.css"
import "@fontsource/red-hat-display/500-italic.css"
import "@fontsource/red-hat-display/700.css"
import "@fontsource/red-hat-display/700-italic.css"
import "@fontsource/red-hat-display/900.css"
import "@fontsource/red-hat-display/900-italic.css"


const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: [
        'Red Hat Display',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Cover>
        <DrawerAppBar />
      </Cover>
      <WhyRelocity />

    </ThemeProvider>

  );
}

export default App;
