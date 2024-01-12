import './App.css';
import React, { useState, useEffect, createContext } from 'react';
import DonateForm from './DonateForm';
import { Routes, Route } from 'react-router-dom';
import Container from "./Container"
import NavBar from './NavBar';
import { DonatesList } from './DonatesList';
import DonationCard from "./DonationCard"
import axios from 'axios';

export const ThemeContext = createContext();

export const currencies = [
  { value: 'ILS', label: '₪' },
  { value: 'USD', label: '$' }
];

function App() {
  //מערך המכיל את רשימת התורמים
  const [donators, setDonators] = useState([
    { name: 'רחל', sum: '10', date: new Date().toLocaleString('en-GB') },
    { name: 'שרה', sum: '100', date: new Date().toLocaleString('en-GB') },
    { name: 'רבקה', sum: '80', date: new Date().toLocaleString('en-GB') },
  ]);
  //משתנה עבור מידע על המטבע
  const [currencyData, setCurrencyData] = useState([]);
  //הגדרת משתנה עבור בחירת הצבע לעמוד
  const [theme, setTheme] = useState('light');
  // המטבע זה אומר על 
  const [selectedCurrency, setSelectedCurrency] = useState({ value: 'ILS', label: '₪' });
  // זה משתנה לספירת מספר התרומות
  const [sum, setSum] = useState(3);

  // זה משתנה לסכימת התרומות
  const [reached, setReached] = useState(190);
  useEffect(() => {
    console.log("Updated reached:", reached);
  }, [reached]);
  // פונקציה להוספת תורם
  const addDonator = (newDonator) => {
    const donationAmount = Number(newDonator.sum); // Convert to a number

    setReached((prevReach) => prevReach + donationAmount);
    
    setDonators((prevDonators) => [...prevDonators, newDonator]);
    setSum((prevSum) => prevSum + 1);
 
    console.log("sum: ", newDonator.sum);
   
  };

  //  לבחירת צבע
  const onThemeChange = (newTheme) => {
    setTheme(newTheme);
  }
  // עבור ידיעת איזה מטבע, כשמשנים
  const onCurrencyChange = (newCurrency) => {
    setSelectedCurrency(newCurrency);
  }


  useEffect(() => {
    axios.get("https://api.currencyapi.com/v3/latest?apikey=cur_live_sAoUD0IZV16X8Kr58xouhSp8wTQrwCrmlgPvvyjD")
      .then(res => {
        console.log(res.data.data.ILS.value);
        setCurrencyData(res.data.data.ILS.value);
      })
      .catch(error => {
        console.error('Error fetching currency data:', error);
      });
  }, []);


  return (
    //אחראי הצבעים
    <ThemeContext.Provider value={{ theme: theme, changeTheme: onThemeChange, currency: selectedCurrency, changeCurrency: onCurrencyChange }}>
      <div>
        <NavBar sum={sum} />
        <Routes>
          {<Route path="/" element={<Container reached={reached}donators={donators} sum={sum} currencyData={currencyData} selectedCurrency={selectedCurrency}theme={theme} />} />}
          <Route path="Donate" element={<DonationCard donators={donators} />} />
          <Route path="DonateForm" element={<DonateForm addDonator={addDonator} currencyData={currencyData} selectedCurrency={selectedCurrency} />} />
          <Route path="DonatesList" element={<DonatesList donators={donators} />} />
        </Routes>

      </div>
    </ThemeContext.Provider>
  );
}

export default App;
