import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import Container from '@mui/material/Container';
import Slider from '@mui/material/Slider';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import TextareaAutosize from '@mui/base/TextareaAutosize';

const marks = [
    {
      value: 0,
      label: '5 mins',
    },
    {
      value: 50,
      label: '15 mins',
    },
    {
      value: 100,
      label: '30 mins',
    },
];
  

export default function CreateScrapeForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" onSubmit={handleSubmit} >
            <Box>
                <Typography className="mt-30 mb-10 font-semibold" variant="h5" component="h2">
                    Create a new scrape
                </Typography> 
                <Typography className="mb-20 text-modalTextDarker text-sm" variant="h6" component="h2">
                    Upnotify will continually scrape your chosen Upwork job feed and alert you when new jobs are present
                </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <InputLabel shrink htmlFor="firstName" className='text-black font-bold text-sm'>
                    Name
                </InputLabel>
                <TextField
                    inputProps={{
                        style: {
                            fontSize: 14,
                        },
                        className: 'radius-8 p-10'
                    }}
                    required
                    fullWidth
                    name="firstName"
                    id="firstName"
                    placeholder="Enter a Name"
                />
              </Grid>
              
              <Grid item xs={12}>
                <InputLabel shrink htmlFor="url" className='text-black font-bold text-sm flex justify-start gap-5'>
                    Upwork RSS feed URL
                    <HelpOutlineIcon />
                </InputLabel>
                <TextField
                    inputProps={{
                        style: {
                            fontSize: 14,
                        },
                        className: 'radius-8 p-10'
                    }}
                    required
                    fullWidth
                    name="url"
                    id="url"
                    placeholder="Enter a URL"
                />
              </Grid>

              <Grid item xs={12}>
                <InputLabel shrink htmlFor="interval" className='text-black font-bold text-sm flex justify-start gap-5'>
                    Scrape interval
                    <HelpOutlineIcon />
                </InputLabel>
                <Slider
                    aria-label="Custom marks"
                    step={50}
                    valueLabelDisplay="auto"
                    marks={marks}
                />
              </Grid>

              <Grid item xs={12}>
                <InputLabel shrink htmlFor="url" className='text-black font-bold text-sm flex justify-start gap-5'>
                    Description
                </InputLabel>
                <TextareaAutosize className='focus:outline-none w-full resize-none text-black font-bold text-sm r-30 p-15 rounded-lg border-1 border-login-input border-solid placeholder:text-sm placeholder:font-normal' minRows={2} placeholder='Enter a description'/>
              </Grid>

              <Grid item xs={12}>
                <InputLabel shrink htmlFor="interval" className='text-black font-bold text-sm'>
                    Notify
                </InputLabel>
                <Typography variant="body1" component="p" className="text-black !text-xs my-10">
                    Whenever a new job has been found, add the channels you wish the notifications to me emitted too
                </Typography>
                <>
                    <FormControlLabel
                        control={
                            <Checkbox value="allowExtraEmails" color="primary" />
                        }
                        label="Email"
                    />
                    <TextField
                        inputProps={{
                            style: {
                                fontSize: 14,
                            },
                            className: 'radius-8 p-10'
                        }}
                        required
                        fullWidth
                        name="email"
                        id="email"
                        placeholder="Enter an email"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="allowExtraEmails" 
                                color="primary" 
                                inputProps={{
                                    style: {
                                        fontSize: 14,
                                    },
                                    className: 'radius-8'
                                }}
                                className='rounded-lg'
                            />
                        }
                        label="Discord"
                    />
                    <TextField
                        inputProps={{
                            style: {
                                fontSize: 14,
                            },
                            className: 'radius-8 p-10'
                        }}
                        required
                        fullWidth
                        name="discord"
                        id="discord"
                        placeholder="Enter Discord Webhook URL"
                    />
                    <FormControlLabel
                        className='rounded-lg'
                        control={
                            <Checkbox value="allowExtraEmails" className='rounded-lg' />
                        }
                        label="Slack"
                    />
                    <TextField
                        inputProps={{
                            style: {
                                fontSize: 14,
                            },
                            className: 'radius-8'
                        }}
                        required
                        fullWidth
                        name="slack"
                        id="slack"
                        placeholder="Enter Slack Webhook URL"
                    />
                </>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}