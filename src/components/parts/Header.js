import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'green' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h5" component="div">
          MUTENKA 
        </Typography>
        <div>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <IconButton color="inherit">
              <HomeIcon />
            </IconButton>
          </Link>

          <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </Link>
          
          <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
            <IconButton color="inherit">
              <ContactSupportIcon />
            </IconButton>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
