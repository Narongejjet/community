import { Routes, Route } from "react-router-dom";
import React from 'react';
import Navbar from './head/Navbar';
import Dashboard from './community/dashboard';
import Community from './community/community';
import Official from './community/official';
import Reviews from "./community/reviews";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';
import { Link } from 'react-router-dom';

function App() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Navbar />

      {/* ส่วนของ Navigation Bar */}
      <AppBar position="sticky">
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Tabs value={value} onChange={handleChange} centered >
            <Tab component={Link} to="/community" label="community" />
            <Tab component={Link} to="/official" label="official" />
            <Tab component={Link} to="/reviews" label="reviews" />
          </Tabs>
        </Box>
      </AppBar>

      {/* ข้อมูลที่มีไว้แสดงในแต้ละ Page */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/community" element={<Community />} />
        <Route path="/official" element={<Official />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
