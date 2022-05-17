import * as React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

function FormStepTwo() {
    return (
        <Stack spacing={2}>
            <Typography variant={'h5'}>
                Verify Passcode
            </Typography>
            <Grid item xs={12}>
                <TextField
                    required
                    id="verify-passcode"
                    label="One Time Passcode"
                    name="email"
                    fullWidth
                />
            </Grid>
        </Stack>
    );
}

export default FormStepTwo;