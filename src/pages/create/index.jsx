import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export default function Edit({list, contact, setList}) {
  const initialContact = {
    id: list[list.length - 1].id + 1,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  };
  const [newContact, setNewContact] = useState(initialContact);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const {value} = e.target;
    setNewContact({
      ...newContact,
      [e.target.name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, newContact]);
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setNewContact(initialContact);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First name
        <input type="text" name="firstName" value={newContact.firstName} onChange={handleChange} />
      </label>
      <label>
        Last name
        <input type="text" name="lastName" value={newContact.lastName} onChange={handleChange} />
      </label>
      <label>
        Phone
        <input type="text" name="phone" value={newContact.phone} onChange={handleChange} />
      </label>
      <label>
        Email
        <input type="text" name="email" value={newContact.email} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
      <input type="button" value="Cancel" onClick={handleCancelClick} />
      <input type="button" value="Go Back To The List" onClick={() => navigate('/')} />
    </form>
  );
}
