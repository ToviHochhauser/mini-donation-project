import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import StoreIcon from '@mui/icons-material/Store';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import NativeSelect from '@mui/material/NativeSelect';
import { React, useState } from 'react';
import "./Navi.css";

function Navi() {
    const my_pages = ['DonateForm', 'DonatesList'];
    const names = ['לתרומה', "רשימת תרומות"];
    const currencies = [
        { value: 'ILS', label: '₪' },
        { value: 'USD', label: '$' }
    ];

    const handleChange = (event) => {
        setSelectedCurrency(event.target.value);
        // Handle any other logic related to the currency change
    };

    const [selectedCurrency, setSelectedCurrency] = useState('');

    return (
        <AppBar id="bar" position="static" sx={{ backgroundColor: 'pink' }}>
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
                        textDecoration: 'none'
                    }}
                >
                    אוהל יצחק ומרים
                </Typography>

                <Box sx={{ flexWrap: 'wrap', flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                    {my_pages.map((page, index) => (
                        <Button
                            key={page}
                            sx={{ my: 1, color: 'white', display: 'block', padding: 2, fontFamily: "fantasy", mr: 1 }}
                            component={Link}
                            to={`/${page}`}
                        >
                            {names[index]}
                        </Button>
                    ))}

                    <NativeSelect
                        id="select-native"
                        label="מטבע"
                        value={selectedCurrency}
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
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navi;
