import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import TController from './Components/TController';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



const theme = createTheme({
  palette: {
   
    bgcolor:{
      main:'#EEEEEE',
      alt:'#FBF8F6',
      term:'#F2F5FC'
    },
    neutral:{
      main:'#fff',
      alt:'#000000',
      oranget:'#FF836D'
    }
  },
  typography:{
    fontFamily: 'roboto'
  }
})

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <TController/>
    </ThemeProvider>
    
    </>
  )
}

export default App
