import React from 'react';
import { Button, Typography, Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LanguageIcon from '@mui/icons-material/Language';
import { LanguageContext } from '../context/languageContext';

const NavbarLanguage = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { language, setLanguage } = React.useContext(LanguageContext);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
    const { val } = event.currentTarget.dataset;
    setLanguage(val);
  };
  return (
    <div style={{ marginLeft: '16%' }}>
      <Button onClick={handleClick}>
        <LanguageIcon sx={{ color: 'white' }} />
        <Typography variant="h6" color="white">
          {language}
        </Typography>
        <ArrowDropDownIcon sx={{ color: 'white' }} />
      </Button>
      <Menu
        id="language-menu"
        aria-labelledby="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <MenuItem data-val="EN" onClick={handleClose}>
          English
        </MenuItem>
        <MenuItem data-val="SE" onClick={handleClose}>
          Spanish
        </MenuItem>
      </Menu>
    </div>
  );
};

export default NavbarLanguage;
