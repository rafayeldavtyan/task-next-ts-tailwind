import React from "react";
import Box from "@mui/material/Box";
import Fade from '@mui/material/Fade';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import AddIcon from '@mui/icons-material/Add';
import CreateScrapeForm from "@components/Forms/CreateScrapeForm";

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
    bgcolor: 'background.paper',
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 8px 24px rgba(16, 24, 40, 0.1)',
    borderRadius: '12px',
    px: 1,
};

export default function CreateScrape({ open, handleClose, handleSubmit }: ModalProps) {
    return (
        <Fade in={open}>
            <Box sx={style} className="laptop:w-modal4 mobile:w-modal2">
                <CreateScrapeForm />
                <Box className='flex justify-between my-20 gap-15 w-full px-50'>
                    <Button
                        fullWidth
                        variant="outlined"
                        disableRipple 
                        className='text-black rounded-lg'
                        onClick={handleClose}
                        >
                            Cancel
                    </Button>
                    <Button 
                        fullWidth
                        disableRipple 
                        startIcon={<AddIcon fontSize='large' />} 
                        className='bg-blue rounded-lg text-white hover:bg-blue'
                        onClick={handleSubmit}
                        >
                            Create
                    </Button>
                </Box>
            </Box>
        </Fade>
    )
}