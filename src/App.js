import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header'
import MainBoard from './components/MainBoard'
import unsplash from './api/unsplash';
function App() {
  const [pins, setNewPins] = useState([])
  const getImages =(term)=>{
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      }
    }
    )
  }
  const onSearchSubmit = (term) => {
    console.log("fys", term);
    getImages(term).then((res) => {
      let results = res.data.results;

      let newPins = [
        ...results,
        ...pins
      ];
      newPins.sort(function(a, b) {
        return 0.5 - Math.random();
      });
      setNewPins(newPins)
    })
  }
  // onSearchSubmit("bali")
  const getNewPins = () => {
    let promises = [];
    let pinData = [];
    let pins = ['ocean', "Tokyo", "Chicago", "cat", "programming", "moscow", "Uzbekistan", "London", "Usa", "Andijan", "Maldives", "Travel", 'Health and wellness', 'DIY home renovation projects', "Women's style", 'Beauty', "Food and drink", 'Motivational quotes'];
    pins.forEach((pinTerm) => {
      promises.push(
        getImages(pinTerm).then((res) => {
          let results = res.data.results;
          pinData = pinData.concat(results);
          pinData.sort(function(a, b){
            return 0.5 - Math.random();
          });
        })
      )
    })
    Promise.all(promises).then(() => {
      setNewPins(pinData);
    })
  }
  useEffect(() => {
    getNewPins();
  }, []);
  return (
    <div className="app">
      <header className="App-header">
      <Header onSubmit={onSearchSubmit}/>
      <MainBoard pins={pins}/>
      </header>
    </div>
  );
}

export default App;
