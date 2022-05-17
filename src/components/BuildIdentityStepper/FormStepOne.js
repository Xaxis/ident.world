import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Bip39Test from "../../libs/bip39test";

console.log(Bip39Test());

function FormStepOne() {
    return (
        <Stack spacing={2}>
            <Typography variant={'h5'} gutterBottom>
                Associate Identity
            </Typography>
            <Grid item xs={12}>
                <TextField
                    required
                    id="build-identity-email"
                    label="Email"
                    name="email"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="build-identity-passphrase"
                    label="Passphrase (Optional)"
                    name="passphrase"
                    fullWidth
                />
            </Grid>
        </Stack>
    );
}

export default FormStepOne;