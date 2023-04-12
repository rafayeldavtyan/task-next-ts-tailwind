import React from "react";
import Box from "@mui/material/Box";
import Fade from '@mui/material/Fade';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Image from "next/image";

interface ModalProps {
    readonly open: boolean,
    handleClose: () => void,
    handleNextClick: () => void,
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 8px 24px rgba(16, 24, 40, 0.1)',
    borderRadius: '12px',
    p: 2,
};

export default function Step3({ open, handleClose, handleNextClick }: ModalProps) {
    return (
        <Fade in={open}>
            <Box sx={style} className="laptop:w-modal4 mobile:w-modal2">
                <Image
                    src="/images/step-3.png"
                    alt="Step 3"
                    className="block mx-auto"
                    width={300}
                    height={400}
                    priority
                />
                <Box className='m-20'>
                    <Box className='flex justify-between items-center'>
                        <Typography className="mt-30 mb-10 font-semibold" variant="h5" component="h2">
                            Enter scrape data 
                        </Typography>
                        <Typography className="text-blue mt-30 mb-10 font-semibold" component="span">
                            3/4
                        </Typography>
                    </Box>
                    <Box>
                        <Typography className="text-modalTextDarker text-sm" variant="h6" component="h2">
                            On this modal section, enter the details of your scrape
                        </Typography>
                        <Typography className="text-modalTextDarker text-sm mt-20" variant="h6" component="h2">
                            Here you can choose where you will like to be notified, the interval of your scrape and the Upwork RSS feed for your jobs
                        </Typography>
                        <Typography className="text-modalTextDarker text-sm mt-20" variant="h6" component="h2">
                            {`Don't worry, on the form we'll have a video showing you exactly how to get this information`}
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
                        onClick={handleNextClick}
                        >
                            Next
                    </Button>
                </Box>
            </Box>
        </Fade>
    )
}