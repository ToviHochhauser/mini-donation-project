import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import StoreIcon from '@mui/icons-material/Store';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import { Box, Button, Fade, MenuItem, Menu } from '@mui/material';
import { Link } from 'react-router-dom';
import NativeSelect from '@mui/material/NativeSelect';
import { React, useState, useContext } from 'react';
import "./NavBar.css";
import { ThemeContext, currencies } from './App';

function NavBar({ sum }) {
    let themeObject = useContext(ThemeContext);
    const [showAlert, setShowAlert] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleChange = (event) => {
        console.log(event.target.value);
        const currencyObject = currencies.find((currency) => currency.value === event.target.value);
        console.log(currencyObject);
        themeObject.changeCurrency(currencyObject);
        console.log(themeObject?.currency.label);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false)
          }, "3000");
        // Handle any other logic related to the currency change
    };

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = (selectedTheme) => {
        console.log(selectedTheme);
        themeObject.changeTheme(selectedTheme)
        setAnchorEl(null);
    };

    return (
            <AppBar className={`bar-${themeObject?.theme}`}
            position="fixed"
            sx={{ backgroundColor: 'pink' }}>
            {showAlert && <Alert className='user-alert' severity="info">שער המטבע שונה</Alert>}
            <Toolbar>
                <StoreIcon />
                <Typography
                    variant="h5"
                    noWrap
                    component={Link}

                    to="/"
                    sx={{
                        mr: 1,
                        fontWeight: 100,
                        fontFamily: "fantasy",
                        color: 'white',
                        letterSpacing: '.1rem',
                        textDecoration: 'none',
                        margin:'20px'
                    }}
                >
                    אוהל יצחק ומרים
                </Typography>
               
                <Typography

                    variant="h5"
                    noWrap
                    component={Link}
                    to="DonateForm"
                    sx={{
                        mr: 1,
                        fontWeight: 100,
                        fontFamily: "fantasy",
                        color: 'white',
                        letterSpacing: '.1rem',
                        textDecoration: 'none',
                        margin:'20px'
                    }}
                >
                    לתרומה
                </Typography>
                <NativeSelect
                    className="select-native"
                    label="מטבע"
                    value={themeObject?.currency.value}
                    onChange={handleChange}
                    inputProps={{
                        name: 'currency',
                        id: 'currency-select',
                    }}
                    sx={{ width: '80px', ml: 2 }}
                >
                    {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </NativeSelect>

                <Typography

                    variant="h5"
                    noWrap
                    component={Link}
                    to="/"
                    sx={{
                        mr: 1,
                        fontWeight: 100,
                        fontFamily: "fantasy",
                        color: 'white',
                        letterSpacing: '.1rem',
                        textDecoration: 'none',
                        margin:'20px'
                    }}
                >
                    {sum} אנשים כבר תרמו
                </Typography>

        <Button
          className="change-theme-button"
          aria-controls={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          שנה ערכת נושא
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={() => handleClose(themeObject.theme)}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={() => handleClose('light')}>בהיר</MenuItem>
          <MenuItem onClick={() => handleClose('dark')}>כהה</MenuItem>
        </Menu>

            </Toolbar>

        </AppBar>
    );
}

export default NavBar;
