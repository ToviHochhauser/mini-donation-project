// import * as React from 'react';
// import {Tabs,Tab,Box} from '@mui/material';
// import Grid from '@mui/material/Grid';
// import DonationCard from "./DonationCard";

// export default function Try() {
//   const [value, setValue] = React.useState('one');

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
   
// <Grid
//   container
//   direction="column-reverse"
//   justifyContent="space-between"
//   alignItems="center"
// >

//     <Box sx={{ width: '100%' }}>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         textColor="secondary"
//         indicatorColor="secondary"
//         aria-label="secondary tabs example"
//       >
//         <Tab value="one" label="תרומות" />
//         <Tab value="two" label="אודות" />
       
//       </Tabs>

//       {/* Content for each tab based on the selected value */}
//       {value === 'one' && <DonationCard />}
//       {value === 'two' && <div>הארגון מגייס כספים למען טובת הכלל</div>}
      
//     </Box>
//   </Grid>);
// }
