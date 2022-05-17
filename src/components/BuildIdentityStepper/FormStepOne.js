import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

function FormStepOne(props) {
    const { onChangeHandler, ...rest } = props;

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
                    onChange={(e) => onChangeHandler(e)}
                />
            </Grid>
        </Stack>
    );
}

export default FormStepOne;