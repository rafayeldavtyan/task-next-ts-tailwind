import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';
import SidebarContent from '@components/SidebarContent';
import NoContent from '@components/Sections/NoContent';
import CreateModal from '@components/Modals/CreateModal';

export enum ActiveTabs {
    scrape = 'Scrape',
    jobs = 'Jobs',
    settings = 'Settings',
}

const drawerWidth = 240;

export default function HomepageSection() {
    const [activeSection, setActiveSection] = useState(ActiveTabs.scrape);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    
    const handleClose = () => setOpen(false);

    const sectionChangeHandler = (section:ActiveTabs) => () => setActiveSection(section);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                sx={{ 
                    width: `calc(100% - ${drawerWidth}px)`, 
                    ml: `${drawerWidth}px`, 
                    background: 'none', 
                    boxShadow: 'none' ,
                    borderBottom: '1px solid #EBEEF5'
                }}
            >
                <Toolbar className='flex justify-between items-center'>
                    <Typography variant="h6" noWrap component="div" className="text-black">
                        { activeSection }
                    </Typography>
                    <Button 
                        disableRipple 
                        startIcon={<AddIcon fontSize='large' />} 
                        className='bg-blue rounded-lg text-white hover:bg-blue px-10'
                        onClick={handleOpen}
                        >
                            Create
                    </Button>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar className='flex justify-start items-center mb-10'>
                    <Box className='relative after:absolute after:content-["U"] after:top-9 after:left-13 after:text-3xl mr-10 p-25 rounded-full bg-gradient-to-r from-[#4E5EF2] to-[#D9D9D9] capitalize text-white text-lg' />
                    <Typography variant="h5" noWrap component="h1" className="text-black font-bold">
                        Upnotify
                    </Typography>
                </Toolbar>
                <Divider />
                <SidebarContent activeSection={activeSection} sectionChangeHandler={sectionChangeHandler} />
            </Drawer>

            <NoContent item={activeSection} />
            <CreateModal 
                open={open}
                handleClose={handleClose}
                handleSubmit={handleClose}
            />
        </Box>
    );
}