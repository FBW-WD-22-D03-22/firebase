import { useState } from 'react';

export const Form = (props) => {
  const formType = props.formType;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [number, setNumber] = useState('');
  const [street, setStreet] = useState('');
  const [ZIP, setZIP] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  // add user

  const addUser = () => {
    const userInfo = {
      firstName,
      lastName,
      age,
      city,
      country,
      number,
      street,
      ZIP,
      email,
      role,
      imageUrl,
    };
    console.log(`add user ${userInfo}`);
  };

  // delete user

  const deleteUser = () => {
    const userId = user.id;
    console.log(`delete user ${userId}`);
  };

  // update user

  const updateUser = () => {
    const userId = user.id;
    const userInfo = {
      firstName: firstName ? firstName : user.firstName,
      lastName: lastName ? lastName : user.lastName,
      age: age ? age : user.age,
      city: city ? city : user.city,
      country: country ? country : user.country,
      number: number ? number : user.number,
      street: street ? street : user.street,
      ZIP: ZIP ? ZIP : user.ZIP,
      email: email ? email : user.email,
      role: role ? role : user.role,
      imageUrl: imageUrl ? imageUrl : user.imageUrl,
    };
  };

  return (
    <>
      <form action="">
        <label htmlFor="">
          Profile Image
          <input type="text" onChange={(e) => setImageUrl(e.target.value)} />
        </label>
        <label htmlFor="">
          First Name
          <input type="text" onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <label htmlFor="">
          Last Name
          <input type="text" onChange={(e) => setLastName(e.target.value)} />
        </label>
        <label htmlFor="">
          Age
          <input type="number" onChange={(e) => setAge(e.target.value)} />
        </label>
        <label htmlFor="">
          Street
          <input type="text" onChange={(e) => setStreet(e.target.value)} />
        </label>
        <label htmlFor="">
          Number
          <input type="number" onChange={(e) => setNumber(e.target.value)} />
        </label>
        <label htmlFor="">
          ZIP
          <input type="number" onChange={(e) => setZIP(e.target.value)} />
        </label>
        <label htmlFor="">
          City
          <input type="text" onChange={(e) => setCity(e.target.value)} />
        </label>
        <label htmlFor="">
          Country
          <input type="text" onChange={(e) => setCountry(e.target.value)} />
        </label>
        <label htmlFor="">
          email
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label htmlFor="">
          Role
          <input type="text" onChange={(e) => setRole(e.target.value)} />
        </label>
      </form>
      <div className="user__actions">
        {formType === 'create' && <button onClick={addUser}>Add User</button>}
        {formType === 'update' && (
          <>
            <button onClick={updateUser}>Update User</button>
            <button onClick={deleteUser}>Delete User</button>
          </>
        )}
      </div>
    </>
  );
};
