import './App.css';
import Header from './ui/Header';
import Cover from './ui/Cover';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import DrawerAppBar from './ui/Header';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: [
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
      <DrawerAppBar />
      <Cover />
    </ThemeProvider>

  );
}

export default App;
