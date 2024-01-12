import React, { useContext, useState, useEffect } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { DonatesList } from "./DonatesList";
import './container.css';
import { ThemeContext } from './App';
import './Donates.css';
import topicImage from './kunsho.jpg';
import movingPic from './tor.jpeg';

function Container(props) {
  const [value, setValue] = React.useState('one');
  const aim = 1000000;

  const [percentage, setPercentage] = useState(0);

  //כשהסכום משתנה, פונקציה זו מופעלת ובה נחשב כמה אחוזים הושגו
  useEffect(() => {
    const calculatedPercentage = parseInt((props.reached / aim) * 100, 10);
    setPercentage(calculatedPercentage > 100 ? 100 : calculatedPercentage);
  }, [props.reached]);

  //זז לפי אחוזי התרומה
  const progressBarStyle = {
    width: `${percentage}%`,
    backgroundColor: 'pink'
  };
//התמונה שזזה לפי האחוזים גם כן
  const movingPicContainerStyle = {
    left: `${100 - percentage}%`,
  };
  


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let themeObject = useContext(ThemeContext);

  return (
    <div id='con' className={`donations-container-${themeObject.theme}`}>
      <img
        src={topicImage}
        id="topicImage"
        alt="topicImage"
        className="topic-image"
      />
      <div className="two">
        <h3>{percentage}% הושגו</h3>
        <h1>  {props.reached} ₪</h1>
      </div>
      <div className="progress-container">
        <span id="progressBar" style={progressBarStyle}></span>
        <div
          id="movingPicContainer"
          className="moving-pic-container"
          style={movingPicContainerStyle}
        >
          <img
            src={movingPic}
            alt={`Progress Icon - ${percentage}% completed`}
            className="progress-icon"
          />
        </div>
      </div>
      <h1>מתוך 1,000,000 </h1>
      <h3>מספר התורמים שתרמו: {props.sum}</h3>

      {/* position the tabs in the center */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '400px',
          textAlign: 'center',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          variant="fullWidth"
        >
          <Tab value="one" label="תרומות" />
          <Tab value="two" label="אודות" />
        </Tabs>
        <Box sx={{ height: '100%', overflow: 'auto' }}>
          {value === 'one' && <DonatesList donators={props.donators} />}
          {value === 'two' && <div>הארגון מגייס כספים למען טובת הכלל</div>}
        </Box>
      </Box>
    </div>
  );
}

export default Container;
