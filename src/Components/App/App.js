import * as React from 'react';
import './App.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button, Paper } from '@mui/material';

function App() {
  return (
    <Container className="App">
      <Paper>
        <Typography variant="h1">
          Welcome to React
        </Typography>
        <Typography variant="h2">
          This is a simple React App
        </Typography>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </Paper>
    </Container>
  );
}

export default App;
