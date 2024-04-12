import React from 'react';
import './photoGallery.css';
import { Link } from 'react-router-dom';

const ImageGallery = ({ province }) => { 
  return (
    <React.Fragment>
      <div className='set-width'>
        <div className="province-container">
          <div className="province-landing-heading1">{province.name}</div>
          <div className="images-container">
            {province.districts.map((district, index) => (
              <div key={index} className="district-container">
                <Link key={index} to="/events/sotkanai-district" state={{ districtData: district }}>
                  <img src={district.images[0]} alt={`District ${district.name}`} className='imgx' />
                  {/* <div className="district1-landing-heading1">{district.name}</div> */}
                  <div className="district-name">{district.name}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ImageGallery;
