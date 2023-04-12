import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { ActiveTabs } from '../Homepage';

export default function NoContent({ item }: { item: ActiveTabs}) {
    return (
        <Box className="m-40 mt-100 border-solid border-1 border-divider text-center p-20 block w-full rounded-lg">
            <Box className="bg-svg inline-block p-10 rounded-full">
                <SearchIcon className='text-blue text-4xl' />
            </Box>
            <Typography variant="h5" noWrap component="h1" className="text-gray text-base mt-20">
                No {item} to show.
            </Typography>
        </Box>
    )
}