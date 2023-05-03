import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import './community.css'

export default function Official() {

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md" sx={{ p: 2 }}>
                <Box sx={{ bgcolor: 'green', height: '100vh' }} />
                {/* contents */}
                <div className='container'>
                    <div className='contentPost'>
                        <div className='header'>header</div>
                        <div className='body'>picture</div>
                        <div className='bottom'>bottom</div>
                    </div>
                </div>
            </Container>
        </React.Fragment>
    );
}