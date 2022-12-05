import React from 'react';

import servicePageImage from '../../../../assets/images/loseless_mobile_view_480px.webp';

const ServicePageImageCard = () => {
  return (
    <div>
      <img
        src={servicePageImage}
        alt={`showcase-img`}
        style={{ width: '100%' }}
        className='card'
      />
    </div>
  );
};

export default ServicePageImageCard;
