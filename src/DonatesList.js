import * as React from 'react';
import Container from '@mui/material/Container';
import DonationCard from './DonationCard';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, Grid, TextField, Fade, Button, MenuItem, Menu, Stack } from '@mui/material';
import './DonatesList.css';

export function DonatesList({ donators }) {
  //משתנה עבור החיפוש
  const [searchTerm, setSearchTerm] = React.useState('');
  //משתנה עבור המיון
  const [sortingType, setSortingType] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
//מה קורה כשבוחרים מיון
  const handleSort = (type) => {
    setSortingType(type);
    handleClose();
  };
//פונקציית מיון- אחראית למיין לפי הבקשה אם יש
  const filteredDonators = donators.filter((donator) =>
  donator.name.toLowerCase().startsWith(searchTerm.toLowerCase()));

  // Clone the array before sorting to avoid modifying the original array
  const sortDonators = (donators) => {
    switch (sortingType) {
      case 'old':
        return [...donators].sort((a, b) => new Date(a.date) - new Date(b.date));
      case 'new':
        return [...donators].sort((a, b) => new Date(b.date) - new Date(a.date));
        case 'amount':
          return [...donators].sort((a, b) => b.sum - a.sum);        
      default:
        return donators;
    }
  };

  const sortedDonators = sortDonators(filteredDonators);

  return (
    <Container
    className='donates-list-container'
      sx={{
        maxWidth: '50%',
        overflowY: 'auto',
        maxHeight: '400px',
      }}
    >
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
        textAlign="center"
      >
        <TextField
          id="outlined-basic"
          label="Search by Name"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          id="fade-button"
          aria-controls={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          מיון תרומות לפי:
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
       <MenuItem onClick={(event) => handleSort('old', event)}>ישן</MenuItem>

          <MenuItem onClick={(event) => handleSort('new', event)}>חדש</MenuItem>
          <MenuItem onClick={(event) => handleSort('amount', event)}>סכום</MenuItem>
        </Menu>
      </Stack>
      <Grid
        container
        spacing={2}
        rowSpacing={2}
        columnSpacing={{ xs: 2, sm: 2, md: 2 }}
      >
        
        {sortedDonators.map((item, index) => (
          <Grid key={index} item xs={12} md={6} lg={6}>
            <DonationCard donator={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
  //מקבל את המערך, ושולח איבר איבר לכרטיס בודד עם הנתונים להצגה
}
