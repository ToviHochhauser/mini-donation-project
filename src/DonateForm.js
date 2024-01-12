import "./DonateForm.css";
import React, { useState } from 'react';
import { TextField, Box, Button } from '@mui/material';
// import { getCurrentDate } from 'date-craft';

const DonateForm = (props) => {
 
  //מגדיר איך תראה תרומה
  const [donateForm, setDonateForm] = useState({
    name: "",
    dedication: "",
    sum: 0,
    date: 0,
  });

  //מה קורה כשלוחצים על סבמיט
  const onSubmit = (event) => { 
    //מניעת ברירת מחדל
   event.preventDefault();
//יוצרות תרומה עם הנתונים שנקלטו
    if(! (donateForm.sum<=0)){

  console.log(donateForm.sum);

let sum = donateForm.sum;

if (props.selectedCurrency.value !== 'ILS') {
  sum = Math.round(sum * props.currencyData);
}

const newDonator = {
  name: donateForm.name,
  dedication: donateForm.dedication,
  sum: sum,
     
      date: new Date().toLocaleString('en-GB'),
    };
//מוסיפות למערך את התרומה החדשה
    props.addDonator(newDonator);
 } 
 else     alert("סכום אינו חוקי")
 //מחזירות את הטופס למקורו
    setDonateForm({
      name: "",
      dedication: "",
      sum: 0,
    });

   
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
// מכניסים בשינוי את שהשתנה לטופס התרומה
      setDonateForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    
  };

  return (
    <form onSubmit={onSubmit}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '250px',
          '& .MuiTextField-root': { marginBottom: '16px' },
        }}
        noValidate
        autoComplete="off"
      >

        <TextField
          id="name"
          name="name"
          label="שם התורם"
          value={donateForm.name}
          onChange={handleChange}
        />

        <TextField
          id="outlined-number"
          name="sum"
          label="סכום התרומה"
          type="number"
          value={donateForm.sum}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="flexible"
          name="dedication"
          label="הקדשה"
          multiline
          rows={4}
          value={donateForm.dedication}
          onChange={handleChange}
        />
      </Box>

      <Button type="submit" variant="contained">תרום</Button>
    </form>
  );
};

export default DonateForm;
