import * as React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepOneIcon from '@mui/icons-material/Email';
import StepTwoIcon from '@mui/icons-material/Shield';
import StepThreeIcon from '@mui/icons-material/Download';
import StepConnector, {stepConnectorClasses} from '@mui/material/StepConnector';
import FormStepOne from './FormStepOne';
import FormStepTwo from './FormStepTwo';
import FormStepThree from './FormStepThree';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Bip39BuildCredential from "../../libs/bip39test";

const ColorlibConnector = styled(StepConnector)(({theme}) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor:
            theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderRadius: 1,
    },
}));

const ColorlibStepIconRoot = styled('div')(({theme, ownerState}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    }),
}));

function ColorlibStepIcon(props) {
    const {active, completed, className} = props;

    const icons = {
        1: <StepOneIcon/>,
        2: <StepTwoIcon/>,
        3: <StepThreeIcon/>,
    };

    return (
        <ColorlibStepIconRoot ownerState={{completed, active}} className={className}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};

const steps = ['Associate', 'Verify', 'Save'];

function BuildIdentityStepper() {
    const [activeStep, setActiveStep] = useState(0);
    const [email, setEmail] = useState('');

    const onChangeInputHandler = (e, setState) => {
        setState(e.target.value);
    }

    return (
        <Stack spacing={3}>
            <Box sx={{
                marginTop: '48px'
            }}>
                <Stepper activeStep={activeStep} connector={<ColorlibConnector/>}>
                    {steps.map((label) => (
                        <Step
                            sx={{
                                padding: '0px',
                            }}
                            key={label}
                        >
                            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
            <Box sx={{
                marginTop: '48px'
            }}>
                {(() => {
                    switch (activeStep) {
                        case 0:
                            return <FormStepOne onChangeHandler={(e) => {
                                setEmail(e.target.value);
                            }}/>;
                        case 1:
                            return <FormStepTwo/>;
                        case 2:
                            return <FormStepThree/>;
                        default:
                            throw new Error('Unknown step');
                    }
                })()}
            </Box>
            <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
            >
                <Stack spacing={1} direction={'row'}>
                    <Button
                        variant="text"
                        color="primary"
                        size="large"
                        type="submit"
                        sx={{
                            display: () => activeStep > 0 ? 'block' : 'none',
                        }}
                        onClick={() => {
                            if (activeStep > 0) {
                                setActiveStep(activeStep - 1);
                            }
                        }}
                    >
                        Back
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        type="submit"
                        onClick={() => {

                            // Take actions based on current step
                            switch(activeStep) {
                                case 0:
                                    Bip39BuildCredential(email).then(res => console.log(res));
                                    break;
                                case 1:
                                    break;
                                case 2:
                                    break;
                            }

                            // Proceed to next step
                            if (activeStep <= steps.length) {
                                setActiveStep(activeStep + 1);
                            }
                        }}
                    >
                        Next
                    </Button>
                </Stack>
            </Box>
        </Stack>
    );
}

export default BuildIdentityStepper;