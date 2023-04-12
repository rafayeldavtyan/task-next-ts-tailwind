import React from "react";
import Box from "@mui/material/Box";
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

interface ModalProps {
    readonly open: boolean,
    handleClose: () => void,
    handleSubmit: () => void,
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: 'background.paper',
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 8px 24px rgba(16, 24, 40, 0.1)',
    borderRadius: '12px',
    p: 2,
};

export default function Step1({ open, handleClose, handleSubmit }: ModalProps) {
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 300,
                },
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Box className='m-20'>
                        <Typography className="my-10 text-sm font-semibold" variant="h6" component="h2">
                            Expertise and Experience
                        </Typography>
                        <Box className="p-15 rounded-lg border-1 border-divider border-solid">
                            <Typography className="text-modalText text-base" variant="h6" component="h2">
                                I have 5 years experience working at a fortune 500 company where we helped 1000th companies scale to X.
                            </Typography>
                            <Typography className="text-modalText text-base mt-20" variant="h6" component="h2">
                                I have strong copywriting skills via ....
                            </Typography>
                        </Box>
                        <Typography className="mt-30 mb-10 text-sm font-semibold" variant="h6" component="h2">
                            How would you like to sign off the proposal
                        </Typography>
                        <Box className="p-15 rounded-lg border-1 border-divider border-solid">
                            <Typography className="text-modalText text-base" variant="h6" component="h2">
                                I look forward to hearing a prompt response from yourself as I prepare to engage with your organisation
                            </Typography>
                            <Typography className="text-modalText text-base mt-20" variant="h6" component="h2">
                                Best, Andrew
                            </Typography>
                        </Box>
                    </Box>
                    <Box className='m-20'>
                        <Box className='flex justify-between items-center'>
                            <Typography className="mt-30 mb-10 font-semibold" variant="h5" component="h2">
                                Help Us Customize your Prompts
                            </Typography>
                            <Typography className="text-blue mt-30 mb-10 font-semibold" component="span">
                                1/4
                            </Typography>
                        </Box>
                        <Box>
                            <Typography className="text-modalTextDarker text-sm" variant="h6" component="h2">
                                Please fill in this form to the best of your detail so we can customize your AI generated proposals as much as possible.
                            </Typography>
                            <Typography className="text-modalTextDarker text-sm mt-20" variant="h6" component="h2">
                                You can change these at any time by heading over to the settings tab within the app!
                            </Typography>
                        </Box>
                    </Box>
                    <Divider />
                    <Box className='flex justify-between my-20 gap-15'>
                        <Button
                            fullWidth
                            variant="outlined"
                            disableRipple 
                            className='text-black rounded-lg'
                            onClick={handleClose}
                            >
                                Skip
                        </Button>
                        <Button
                            fullWidth
                            disableRipple 
                            className='bg-blue rounded-lg text-white hover:bg-blue'
                            onClick={handleSubmit}
                            >
                                Next
                        </Button>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    )
}