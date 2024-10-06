import React from 'react';
import './search.css';

function Search({ searchParams }) {
  return (
    <div className="search-page">
      <div className="search-content">
        <div className="map-container">
          {/* Placeholder for map */}
          <div className="map-placeholder">Map goes here</div>
        </div>
        <div className="listings-container">
          <h3>Search Results for {searchParams.location}</h3>
          <div className="listing">
            <img src="/api/placeholder/300/150" alt="The Hub Atlanta" className="listing-image" />
            <h3 className="listing-title">The Hub Atlanta</h3>
            <p className="listing-details">4 beds 4 baths · Apartment · Floor 5</p>
            <p className="listing-price">$1070 /month</p>
          </div>
          <div className="listing">
            <img src="/api/placeholder/300/150" alt="University House Atlanta" className="listing-image" />
            <h3 className="listing-title">University House Atlanta</h3>
            <p className="listing-details">4 beds 4 baths · Apartment · Floor 6</p>
            <p className="listing-price">$900 /month</p>
          </div>
          <div className="listing">
            <img src="/api/placeholder/300/150" alt="The Standard" className="listing-image" />
            <h3 className="listing-title">The Standard</h3>
            <p className="listing-details">4 beds 4 baths · Apartment · Floor 7</p>
            <p className="listing-price">$1250 /month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;