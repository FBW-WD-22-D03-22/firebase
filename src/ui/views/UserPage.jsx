import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const testUser = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@mail.com',
  address: {
    street: 'Main Street',
    number: '123',
    ZIP: '12345',
    city: 'New York',
    country: 'USA',
  },
  imageUrl:
    'https://images.unsplash.com/photo-1670960058964-79063a8ecc91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
};

export const UserPage = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  return (
    <div className="user-view">
      {testUser && (
        <>
          <h1>
            {testUser.firstName} {testUser.lastName}
          </h1>
          <img
            src={testUser.imageUrl}
            alt={`${testUser.firstName} ${testUser.lastName} image`}
          />
          <p>{testUser.email}</p>
          <div className="user-view__address">
            {testUser.address && (
              <>
                <p>{testUser.address.street}</p>
                <p>{testUser.address.number}</p>
                <p>ZIP {testUser.address.ZIP}</p>
                <p>{testUser.address.city}</p>
                <p>{testUser.address.country}</p>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};
