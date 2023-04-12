import React, { MouseEventHandler } from 'react';
import { ActiveTabs } from '@components/Sections/Homepage';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Image from 'next/image';

interface SidebarProps {
    activeSection: ActiveTabs
    sectionChangeHandler: (section: ActiveTabs) => MouseEventHandler<HTMLLIElement>
}

export default function SidebarContent({ activeSection, sectionChangeHandler }: SidebarProps) {
    return (
        <List>
            <ListItem disablePadding onClick={sectionChangeHandler(ActiveTabs.scrape)}>
            <ListItemButton>
                <ListItemIcon>
                    <Image
                            src={
                                activeSection===ActiveTabs.scrape ? 
                                "/images/scrape-icon-filled.svg" :
                                "/images/scrape-icon.svg"
                            }
                        alt={ActiveTabs.scrape}
                        className="dark:invert"
                        width={24}
                        height={24}
                        priority
                    />
                </ListItemIcon>
                    <ListItemText 
                        primary={ActiveTabs.scrape} 
                        className={`${activeSection===ActiveTabs.scrape ? "text-blue" : ""}`} 
                    />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={sectionChangeHandler(ActiveTabs.jobs)}>
                <ListItemButton>
                    <ListItemIcon>
                        <Image
                            src={
                                activeSection===ActiveTabs.jobs ? 
                                "/images/jobs-icon-filled.svg" :
                                "/images/jobs-icon.svg"
                            }
                            alt={ActiveTabs.jobs}
                            className="dark:invert"
                            width={24}
                            height={24}
                            priority
                        />
                    </ListItemIcon>
                    <ListItemText 
                        primary={ActiveTabs.jobs} 
                        className={`${activeSection===ActiveTabs.jobs ? "text-blue" : ""}`} 
                    />
                </ListItemButton>
            </ListItem>
            <Divider className='my-15'/>
            <ListItem disablePadding onClick={sectionChangeHandler(ActiveTabs.settings)}>
                <ListItemButton>
                    <ListItemIcon>
                        <Image
                            src={
                                activeSection===ActiveTabs.settings ? 
                                "/images/settings-icon-filled.svg" :
                                "/images/settings-icon.svg"
                            }
                            alt={ActiveTabs.settings}
                            className="dark:invert"
                            width={24}
                            height={24}
                            priority
                        />
                    </ListItemIcon>
                    <ListItemText 
                        primary={ActiveTabs.settings} 
                        className={`${activeSection===ActiveTabs.settings ? "text-blue" : ""}`} 
                    />
                </ListItemButton>
            </ListItem>
        </List>
    )
}