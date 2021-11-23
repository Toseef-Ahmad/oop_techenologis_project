// import React from 'react';

// const NavbarGroup = () => {
//   const hardcodeProfile = {
//     name: "wajiha's",
//     profileImg:
//       'https://andco-photos.s3-us-east-2.amazonaws.com/profilePics/tcUDbVg1V7mVsxKYVMWyVi.jpeg',
//   };

//   return <>
//   </>;
// };

import React from 'react';
import { Button, Typography, Menu, MenuItem, Avatar } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LanguageIcon from '@mui/icons-material/Language';
import { LanguageContext } from '../context/languageContext';

const NavbarProfile = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { language, setLanguage } = React.useContext(LanguageContext);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
    // const { val } = event.currentTarget.dataset;
    // setLanguage(val);
  };

  const hardcodeProfile = {
    name: "wajiha's",
    img: 'https://andco-photos.s3-us-east-2.amazonaws.com/profilePics/tcUDbVg1V7mVsxKYVMWyVi.jpeg',
  };

  return (
    <div style={{ marginLeft: '1%' }}>
      <Button onClick={handleClick}>
        <Avatar src={hardcodeProfile.img} />
        <Typography variant="body1" color="white" sx={{ margin: '0 6px' }}>
          {hardcodeProfile.name}
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
          See Profile
        </MenuItem>
        <MenuItem data-val="SE" onClick={handleClose}>
          Settings
        </MenuItem>
        <MenuItem data-val="SE" onClick={handleClose}>
          SignOut
        </MenuItem>
      </Menu>
    </div>
  );
};

export default NavbarProfile;
