import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Fab } from '@mui/material';
import { Add } from '@mui/icons-material';
import './community.css'

export default function Community() {

    const [showPopup, setShowPopup] = useState(false);
    const handleClick = () => {
        setShowPopup(true);
    };

    return (
        <React.Fragment>
            <CssBaseline />

            {/* contents */}
            <div className='container'>
                <div className='contentPost'>
                    <div className='header'>header</div>
                    <div className='body'>picture</div>
                    <div className='bottom'>bottom</div> 
                </div>
            </div>

            {/* botton add post */}
            <div id="fab-container">
                <Fab color="secondary" aria-label="add" onClick={handleClick}>
                    <Add onClick={() => setShowPopup(false)} />
                </Fab>
            </div>

            {/* popup when u click add post */}
            <div>
                {showPopup && (
                    <div className="popup">
                        <div>Add some text</div>
                        <button onClick={() => setShowPopup(false)}>Close Popup</button>
                    </div>
                )}
            </div>

        </React.Fragment>
    );
}