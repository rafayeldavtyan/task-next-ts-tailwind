import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '@ct/authContext';
import Header from '@components/Header';
import LoginForm from '@components/Forms/LoginForm';
import Box from '@mui/material/Box';
import axios from 'axios';

export default function Login() {
    const router = useRouter();
    const { setAuthorized } = useContext(AuthContext);

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      
        const formData = new FormData(event.currentTarget);
        const data = {
          email: formData.get('email'),
          password: formData.get('password'),
        };
  
        axios.post('auth', data)
        .then(res => null)
        .catch(err => null)
        .finally(() => {
          setAuthorized();
          router.push('/');
        })
    };

    return (
        <>
        <Header />
        <Box
            sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            }}
        >
            <LoginForm handleSubmit={handleSubmit} />
        </Box>
        </>
    )
}
