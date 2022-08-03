import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Edit({list, contact, setList}) {
  const [editedContact, setEditedContact] = useState({...contact});
  const [emptyInput, setEmptyInput] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {value} = e.target;
    setEditedContact({
      ...editedContact,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList(
      [...list].map((contactItem) => {
        if (contactItem.id === editedContact.id) {
          return editedContact;
        }
        return contactItem;
      })
    );
    alert('The Contact has been Edited!');
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setEditedContact({
      ...contact,
    });
  };

  useEffect(() => {
    const {firstName, lastName, email, phone} = editedContact;
    if (!firstName.length || !lastName.length || !phone.length || !email.length) {
      setEmptyInput(true);
    } else {
      setEmptyInput(false);
    }
  }, [editedContact]);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Existing Contact</h1>
      <label htmlFor="firstname">
        First name
        <input
          type="text"
          name="firstname"
          aria-labelledby="firstName"
          value={editedContact.firstName}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="lastname">
        Last name
        <input
          type="text"
          name="lastname"
          aria-labelledby="lastName"
          value={editedContact.lastName}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="phone">
        Phone
        <input
          type="text"
          name="phone"
          aria-labelledby="phone"
          value={editedContact.phone}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="text"
          name="email"
          aria-labelledby="email"
          value={editedContact.email}
          onChange={handleChange}
        />
      </label>
      <input type="submit" aria-labelledby="Submit" value="Submit" disabled={emptyInput} />
      <input type="button" aria-labelledby="Cancel" value="Cancel" onClick={handleCancelClick} />
      <input
        type="button"
        aria-labelledby="Go Back To The List"
        value="Go Back To The List"
        onClick={() => navigate('/')}
      />
    </form>
  );
}

Edit.propTypes = {
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
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
