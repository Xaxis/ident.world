import * as React from 'react';
import './App.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {Button, Paper} from '@mui/material';

function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                <Paper>
                    <Typography variant="h1">
                        Hello World
                    </Typography>
                    <Button>
                        Hello Button
                    </Button>
                </Paper>
            </Container>
        </ThemeProvider>
    );
}

export default App;
