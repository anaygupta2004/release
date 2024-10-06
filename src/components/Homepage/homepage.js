import React, { useState } from 'react';
import './homepage.css';
import homescreenimage from '../../images/homescreen.png';
import Search from '../Search/search';
function Homepage() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchParams, setSearchParams] = useState({
    location: '',
    fromDate: '',
    toDate: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prevParams => ({
      ...prevParams,
      [name]: value
    }));
  };

  const handleSearch = () => {
    setShowSearch(true);
  };

  if (showSearch) {
    return <Search searchParams={searchParams} />;
  }

  return (
    <div className="homepage">
      <div className="hero">
        <h1 className="hero-title">ReLease</h1>
        <img
          className="hero-image"
          src={homescreenimage}  
          alt="Interior room"
        />
        <h2 className="hero-subtitle">
          Looking for a place to stay? We've got you covered!
        </h2>
        <button className="cta-button">Explore Now</button>
        <div className="search-bar">
          <div className="search-input">
            <label>Location</label>
            <input 
              type="text" 
              name="location"
              placeholder="Where do you want to stay?" 
              value={searchParams.location}
              onChange={handleInputChange}
            />
          </div>
          <div className="search-input">
            <label>From</label>
            <input 
              type="date" 
              name="fromDate"
              value={searchParams.fromDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="search-input">
            <label>To</label>
            <input 
              type="date" 
              name="toDate"
              value={searchParams.toDate}
              onChange={handleInputChange}
            />
          </div>
          <button className="search-button" onClick={handleSearch}>
            <span role="img" aria-label="search icon">🔍</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;