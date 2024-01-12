// import { getCurrentDate, diffInDays } from 'date-craft';
// import ago from 's-ago';
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import "./Donate.css";
// import { styled } from '@mui/material/styles';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// function Donate(props) {
//     const currentDate = getCurrentDate();
//     // const startDate = props.donator.date; // הוודא שהתאריך מוגדר בצורה תקינה
//     let startDate = new Date('2023-11-11');
//     const difference = diffInDays(startDate, currentDate);
//     console.log(difference, currentDate)
//     let got = ago(startDate)
//     if (got.includes('years'))
//         got = "לפני " + got.substring(0, 2) + " שנים";
//     else if (got.includes('year'))
//         got = "לפני שנה";
//     else if (got.includes('months'))
//         got = "לפני " + got.substring(0, 2) + " חודשים";
//     else if (got.includes('month'))
//         got = "לפני חודש";
//     else if (got.includes('days') || got.includes('day'))
//         got = "לפני " + got.substring(0, 2) + " ימים";
//     else
//         got = "עכשיו"

//         const ExpandMore = styled((props) => {
//             const { expand, ...other } = props;
//             return <IconButton {...other} />;
//           })(({ theme, expand }) => ({
//             transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//             marginLeft: 'auto',
//             transition: theme.transitions.create('transform', {
//               duration: theme.transitions.duration.shortest,
//             }),
//           }));
          
//            function RecipeReviewCard() {
//             const [expanded, setExpanded] = React.useState(false);
          
//             const handleExpandClick = () => {
//               setExpanded(!expanded);
//             };
          

//     }
//     console.log();
//     return (
//         <div id="card">
//             <Card sx={{ minWidth: 275 }}>
//                 <CardContent>
//                     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//                         Word of the Day
//                     </Typography>
//                     <Typography variant="h5" component="div">

//                     </Typography>
//                     <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                         adjective
//                     </Typography>
//                     <Typography variant="body2">
//                         well meaning and kindly.
//                         <br />
//                         {/* {props.donator.name} */}
//                     </Typography>
//                 </CardContent>
//                 <CardActions>
//                     <Button size="small">Learn More</Button>
//                 </CardActions>
//             </Card>

//             {/* <h1>{props.donator.name}</h1> */}
//             {/* <h3>{props.donator.sum}</h3> */}
//             {<h3>{`${got}`}</h3>}
//             <Card sx={{ maxWidth: 345 }}>
//                 <CardHeader
//                    
//                     title="Shrimp and Chorizo Paella"
//                     subheader="September 14, 2016"
//                 />
//                 <CardMedia
//                     component="img"
//                     height="194"
//                     image="/static/images/cards/paella.jpg"
//                     alt="Paella dish"
//                 />
//                 <CardContent>
//                     <Typography variant="body2" color="text.secondary">
//                         This impressive paella is a perfect party dish and a fun meal to cook
//                         together with your guests. Add 1 cup of frozen peas along with the mussels,
//                         if you like.
//                     </Typography>
//                 </CardContent>
//                 <CardActions disableSpacing>
//                     <IconButton aria-label="add to favorites">
//                         <FavoriteIcon />
//                     </IconButton>
//                     <IconButton aria-label="share">
//                         <ShareIcon />
//                     </IconButton>
//                     <ExpandMore
//                         expand={expanded}
//                         onClick={handleExpandClick}
//                         aria-expanded={expanded}
//                         aria-label="show more"
//                     >
//                         <ExpandMoreIcon />
//                     </ExpandMore>
//                 </CardActions>
//                 <Collapse in={expanded} timeout="auto" unmountOnExit>
//                     <CardContent>
//                         <Typography paragraph>Method:</Typography>
//                         <Typography paragraph>
//                             Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
//                             aside for 10 minutes.
//                         </Typography>
//                       
//                       
//                     </CardContent>
//                 </Collapse>
//             </Card>
//         </div>
//     );



// }
// export default Donate