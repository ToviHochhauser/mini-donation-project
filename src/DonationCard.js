import React, { useState, useContext } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ThemeContext } from './App';

const DonationCard = (props) => {
  let themeObject = useContext(ThemeContext);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log(themeObject);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={props.donator?.name || 'חפץ בעילום שמו '} />
      <CardContent>
        <Typography variant="body2" color="text">
          תרמ/ה בתאריך:       </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.donator?.date.toString()}
        </Typography>
        <Typography variant="body2" color="text">
          סכום התרומה:      </Typography>
        <Typography variant="body2" color="text.secondary">
          
          {`${props.donator?.sum} ` || '0'}
        </Typography>
        <Typography variant="body2" color="text">
          הקדשה:    </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.donator?.dedication && props.donator.dedication.length > 25
            ? `${props.donator.dedication.substring(0, 25)}...`
            : props.donator?.dedication || ' לכבוד לומדי התורה'}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="favorite">
          <FavoriteIcon />
        </IconButton>
        <IconButton
          onClick={handleExpandClick}
          // aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {props.donator?.dedication && props.donator.dedication.length > 25
              ? props.donator.dedication
              : ' לכבוד לומדי התורה'}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default DonationCard;
