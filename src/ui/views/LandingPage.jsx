import { useEffect, useState } from 'react';

const user = {
  firstName: 'Max',
  lastName: 'Mustermann',
  age: 42,
  city: 'Berlin',
  country: 'Germany',
  number: '123456789',
  street: 'Musterstraße',
  ZIP: '12345',
  email: 'asdlaksdj',
  role: 'admin',
  imageUrl:
    'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  id: '123456789',
};

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <img
        src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        alt="Chess Image"
      />
      <p>Willkommen auf der Homepage des Schachvereins "Der Turm".</p>
    </div>
  );
};
