import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Contacts from './components/Contacts/Contacts';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Tours from './components/Tours/Tours';
import CustomCarousel from './custom-components/Carousel';
import CustomPlaceDateSelection from './custom-components/CustomPlaceDateSelection';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </div>
      </BrowserRouter>
      <CustomCarousel />
      <CustomPlaceDateSelection />
      {/* <AppBarNew style={{ backgroundColor: 'red' }} /> */}
      {/* <div maxWidth="xl">
        <Carousel />
      </div> */}
    </div>
  );
}

export default App;
