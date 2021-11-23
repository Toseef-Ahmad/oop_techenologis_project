import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  Select,
  MenuItem,
  Button,
} from '@mui/material';
import { withStyles } from '@mui/styles';

import NavbarLanguage from './NavbarLanguage';
import NavbarGroups from './NavbarGroups';
import NavbarProfile from './NavbarProfile';
import { LanguageProvider } from '../context/languageContext';

const styles = {
  title: {
    marginLeft: '30%',
  },
  navbarLanguage: {
    marginLeft: '',
  },
};

const Navbar = (props) => {
  const { classes } = props;
  return (
    <Paper>
      <LanguageProvider>
        <AppBar className={classes.root} style={{ backgroundColor: '#22304E' }}>
          <Toolbar disableFocusRipple={true}>
            {/* <Typography sx={{ marginLeft: '25%' }}>AndCO.Magazine</Typography> */}
            <img
              style={{ height: '50px', marginLeft: '25%' }}
              src="https://app.andcomag.com/static/media/logo-white.af6c4c71.png"
            />
            <NavbarLanguage />
            <NavbarGroups style={{ marginLeft: '100px' }} />
            <NavbarProfile style={{ marginLeft: '100px' }} />
          </Toolbar>
        </AppBar>
      </LanguageProvider>
    </Paper>
  );
};

export default withStyles(styles)(Navbar);
