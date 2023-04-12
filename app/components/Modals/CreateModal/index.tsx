import React, { useState } from "react";
import Backdrop from '@mui/material/Backdrop';
import Modal from "@mui/material/Modal";
import Step1 from "../Step1";
import Step2 from "../Step2";
import Step3 from "../Step3";
import Step4 from "../Step4";
import CreateScrape from "../CreateScrape";

interface ModalProps {
    readonly open: boolean,
    handleClose: () => void,
    handleSubmit: () => void,
}

export default function CreateModal({ 
    open, 
    handleClose, 
    handleSubmit
}: ModalProps) {
    const [activeStep, setActiveStep] = useState(1);

    const handleNextClick = () => setActiveStep(prev => prev+1);

    const closeHandler = () => {
        handleClose();
        setActiveStep(1);
    }

    const submitHandler = () => {
        handleSubmit();
        setActiveStep(1);
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className="overflow-y-auto"
            open={open}
            onClose={closeHandler}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 300,
                },
            }}
        >
            {
                (activeStep===1) ?
                <Step1 
                    open={open} 
                    handleClose={closeHandler}
                    handleNextClick={handleNextClick}
                /> : 
                (activeStep===2) ?
                <Step2 
                    open={open} 
                    handleClose={closeHandler}
                    handleNextClick={handleNextClick}
                /> : 
                (activeStep===3) ?
                <Step3 
                    open={open} 
                    handleClose={closeHandler}
                    handleNextClick={handleNextClick}
                /> : 
                (activeStep===4) ?
                <Step4 
                    open={open} 
                    handleClose={closeHandler}
                    handleNextClick={handleNextClick}
                /> :
                <CreateScrape 
                    open={open} 
                    handleClose={closeHandler}
                    handleSubmit={submitHandler}
                />
            }
        </Modal>
    )
}