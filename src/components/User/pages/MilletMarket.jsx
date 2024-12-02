import React, { useState, useEffect } from 'react';
import UserNav from '../components/user/usernav';

const MilletMarket = () => {
  const [millets, setMillets] = useState([]);

  // Sample millet data for the market
  useEffect(() => {
    const fetchMillets = async () => {
      // Replace this with your API call if you are fetching data from a server
      const milletData = [
        { id: 1, name: 'Pearl Millet', price: '₹60/kg', availability: 'In Stock' },
        { id: 2, name: 'Finger Millet', price: '₹70/kg', availability: 'In Stock' },
        { id: 3, name: 'Foxtail Millet', price: '₹80/kg', availability: 'Out of Stock' },
      ];
      setMillets(milletData);
    };
    fetchMillets();
  }, []);

  return (
    <>
      <UserNav />
      <div className="container my-5">
        <h1 className="text-center mb-4">Millet Market</h1>
        <div className="row">
          {millets.map((millet) => (
            <div key={millet.id} className="col-md-4">
              <div className="card mb-4">
                <div className="card-header bg-success text-white">
                  <h5>{millet.name}</h5>
                </div>
                <div className="card-body">
                  <p><strong>Price:</strong> {millet.price}</p>
                  <p><strong>Availability:</strong> {millet.availability}</p>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MilletMarket;