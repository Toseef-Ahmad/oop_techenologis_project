import React from 'react';
import {
  Button,
  Typography,
  Menu,
  MenuItem,
  Select,
  Divider,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import GroupIcon from '@mui/icons-material/Group';
import { LanguageContext } from '../context/languageContext';

const NavbarGroups = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { language } = React.useContext(LanguageContext);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
  };

  const hardcodeGroups = [
    "wajiha's",
    'mi family',
    'testing',
    'WE LOVE YOU',
    'test',
    'my-family',
  ];

  return (
    <div style={{ marginLeft: '1%' }}>
      <Button onClick={handleClick}>
        <GroupIcon sx={{ color: 'white' }} />
        <Typography sx={{ margin: '0 5px' }} variant="body2" color="white">
          GROUPS
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
        selected={language}
      >
        {hardcodeGroups.map((group) => (
          <MenuItem data-val="EN" onClick={handleClose}>
            {group}
          </MenuItem>
        ))}
        <Divider />
        <MenuItem data-val="EN" onClick={handleClose}>
          Create group
        </MenuItem>
      </Menu>
    </div>
  );
};

export default NavbarGroups;
