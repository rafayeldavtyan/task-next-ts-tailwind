import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
  
interface LoginProps<FT> {
    handleSubmit: FT;
}

export default function LoginForm({ handleSubmit }: LoginProps<(event: React.FormEvent<HTMLFormElement>) => void>) {
    return (
        <>
            <Box
                sx={{
                    borderRadius: '16px',
                    background: '#fff',
                    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 8px 24px rgba(16, 24, 40, 0.1)'
                }}
                className="laptop:w-loginform3 mobile_laptop:w-loginform2 mobile:w-loginform1"
            >
                <CssBaseline />
                <Box
                    sx={{
                        margin: '35px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography className='font-bold text-3xl'>
                        Login
                    </Typography>
                    <Typography className='text-grey mt-10'>
                        Welcome back! Please enter your details.
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
                        <Typography className='font-semibold mt-25 mb-5'>
                            Email
                        </Typography>
                        <TextField
                            inputProps={{ maxLength: 25, className: 'radius-8' }}
                            required
                            fullWidth
                            className='rounded-lg border-2 login-input font-normal !text-sm'
                            placeholder="Enter your email"
                            id="email"
                            name="email"
                        />
                        <Typography className='font-semibold mt-25 mb-5' >
                            Password
                        </Typography>
                        <TextField
                            inputProps={{ maxLength: 25, className: 'radius-8' }}
                            required
                            fullWidth
                            className='rounded-lg border-2 login-input font-normal !text-sm'
                            placeholder="Enter your password"
                            id="password"
                            name="password"
                            type="password"
                        >
                        </TextField>
                        <Box className='relative'>
                            <Link href='/forgot' className='mobile:static laptop:absolute bottom-20 right-20 w-auto no-underline font-normal !text-sm text-blue cursor-pointer'>
                                Forgot password?
                            </Link>
                        </Box>
                        <Button
                            type="submit"
                            fullWidth
                            className='mt-20 mb-10 py-10 rounded-lg bg-gradient-to-r from-[#2D66F8] to-[#2554CC] capitalize text-white text-lg'
                        >
                            Login
                        </Button>
                        <Box className="text-center mt-10 mb-0">
                            <Image
                                src="/images/google-icon.svg"
                                alt="Anonymous Logo"
                                className="inline-block mr-10"
                                width={24}
                                height={24}
                                priority
                            />
                            <Link href="sign-up" variant="body2" className='mb-0 text-black no-underline text-base font-medium'>
                                Sign in with Google
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Typography variant="body2" className="mt-20 text-white" align="center">
                {"Don't have an account? "}
                <Link color="inherit" href="/sign-up">
                    Sign up
                </Link>
            </Typography>
        </>
    )
}