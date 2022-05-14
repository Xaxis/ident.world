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
                        padding: '48px'
                    }}>
                    <main>
                        <Typography
                            component={'h1'}
                            variant={'h2'}
                            align={'center'}
                            color={'textPrimary'}
                            gutterBottom
                        >
                            Build your identity
                        </Typography>
                        {/*<Typography component={'p'} variant={'h5'} align={'center'} color={'textSecondary'}>*/}
                        {/*    Quickly build a unique identifier that securely allows you to manage your associations*/}
                        {/*    across the web.*/}
                        {/*</Typography>*/}
                    </main>
                    <BuildIdentityStepper/>
                </Paper>

            </Container>
        </ThemeProvider>
    );
}

export default App;
