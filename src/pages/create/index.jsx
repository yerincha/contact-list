import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Create({list, setList}) {
  const initialContact = {
    id: list[list.length - 1].id + 1,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  };
  const [newContact, setNewContact] = useState(initialContact);
  const [emptyInput, setEmptyInput] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {value} = e.target;
    setNewContact({
      ...newContact,
      [e.target.name]: value,
    });
  };

  const formatPhoneNumber = (phoneNumberString) => {
    const cleaned = `${phoneNumberString}`.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {firstName, lastName, phone, email} = newContact;
    const formattedContact = {
      id: newContact.id,
      firstName: firstName.charAt(0).toUpperCase() + firstName.slice(1),
      lastName: lastName.charAt(0).toUpperCase() + lastName.slice(1),
      phone: formatPhoneNumber(phone),
      email,
    };

    setList([...list, formattedContact]);
    alert('New Create has been Added!');
    // update id for the next contact creation
    initialContact.id += 1;
    setNewContact(initialContact);
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setNewContact(initialContact);
  };
  useEffect(() => {
    const {firstName, lastName, email, phone} = newContact;
    if (!firstName.length || !lastName.length || !phone.length || !email.length) {
      setEmptyInput(true);
    } else {
      setEmptyInput(false);
    }
  }, [newContact]);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create New Contact</h1>
      <label htmlFor="firstName">
        First name
        <input
          type="text"
          name="firstName"
          aria-required="true"
          autoComplete="off"
          value={newContact.firstName}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="lastName">
        Last name
        <input
          type="text"
          name="lastName"
          aria-required="true"
          autoComplete="off"
          value={newContact.lastName}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="phoneNumber">
        Phone
        <input
          type="text"
          name="phone"
          aria-required="true"
          autoComplete="off"
          value={newContact.phone}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="emailAddress">
        Email
        <input
          type="text"
          name="email"
          aria-required="true"
          autoComplete="off"
          value={newContact.email}
          onChange={handleChange}
        />
      </label>
      <input type="submit" aria-labelledby="Submit" value="Submit" disabled={emptyInput} />
      <input type="button" aria-labelledby="Cancel" value="Cancel" onClick={handleCancelClick} />
      <input
        type="button"
        aria-labelledby="Home"
        value="Go Back To The List"
        onClick={() => navigate('/')}
      />
    </form>
  );
}
Create.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
  setList: PropTypes.func.isRequired,
};
