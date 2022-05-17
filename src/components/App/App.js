import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import BuildIdentityStepper from "../BuildIdentityStepper/BuildIdentityStepper";

function App() {

    // Attempt to use default system theme
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = React.useMemo(
        () =>
            createTheme({
                spacing: 16,
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container>
                <Paper
                    sx={{
                        marginTop: '48px',
                        padding: '32px'
                    }}>
                    <main>
                        <Typography
                            variant={'h2'}
                            align={'center'}
                            color={'textPrimary'}
                            gutterBottom
                        >
                            Create Identity
                        </Typography>
                    </main>
                    <BuildIdentityStepper/>
                </Paper>
            </Container>
        </ThemeProvider>
    );
}

export default App;
