import { useEffect, useState, useContext } from 'react';
import { Form } from '../components/Form';
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

const testUsers = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@mail.com',
    imageUrl:
      'https://images.unsplash.com/photo-1670889505554-c71ef4bc9fa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@mail.com',
    imageUrl:
      'https://images.unsplash.com/photo-1670871301728-3e6dce5fb021?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    firstName: 'Jake',
    lastName: 'Doe',
    email: 'jake.doe@mail.com',
    imageUrl:
      'https://images.unsplash.com/photo-1670443437765-f0239aebf4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
  },
];

export const AdminPage = () => {
  const [usersList, setUsersList] = useState([]);
  const { users } = useContext(AuthContext);

  // read all Users

  // create new User

  // update User

  // delete User

  // ABER...

  return (
    <div className="admin-view">
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
      <Form formType = "addUser" />

      <div className="admin-board">
        <div className="user-create">
          <h2>Create New User</h2>
          <Form formType="create" />
        </div>
        {testUsers && (
          <ul>
            {testUsers.map((user, i) => (
              <li key={i}>
                <div className="user-info">
                  <div className="user-left">
                    <img src={user.imageUrl} alt="" />
                  </div>
                  <div className="user-right">
                    <span>
                      {user.firstName && <p>first name: {user.firstName}</p>}
                      {user.lastName && <p>last name: {user.lastName}</p>}
                    </span>
                    <span>
                      {user.email && <p>email: {user.email}</p>}
                      {user.role && <p>role: {user.role}</p>}
                      {user.age && <p>age: {user.age}</p>}
                      {user.street && (
                        <p>
                          {street}, {city}, {country}, {ZIP}
                        </p>
                      )}
                    </span>
                  </div>
                </div>
                <div className="user-edit">
                  <Form
                    formType="update"
                    userInfo={{
                      firstName: user.firstName,
                      lastName: user.lastName,
                      age: user.age,
                      city: user.city,
                      country: user.country,
                      number: user.number,
                      street: user.street,
                      ZIP: user.ZIP,
                      email: user.email,
                      role: user.role,
                      imgUrl: user.imgUrl,
                      id: user.id,
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
