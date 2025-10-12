import React from 'react';

const ServiceCard = ({ser}) => {
    const {title, desc, icon, bgColor}= ser
    return (
        <div>
          <div className="card w-96">
  <div className="card-body">
    <h2 className="card-title text-2xl">{title}</h2>
    <p className='text-base'>{desc}</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;