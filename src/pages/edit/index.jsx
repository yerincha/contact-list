import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Edit({list, contact, setList}) {
  const [editedContact, setEditedContact] = useState({...contact});

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

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="a">
        First name
        <input
          type="text"
          name="firstName"
          value={editedContact.firstName}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="a">
        Last name
        <input type="text" name="lastName" value={editedContact.lastName} onChange={handleChange} />
      </label>
      <label htmlFor="a">
        Phone
        <input type="text" name="phone" value={editedContact.phone} onChange={handleChange} />
      </label>
      <label htmlFor="a">
        Email
        <input type="text" name="email" value={editedContact.email} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
      <input type="button" value="Cancel" onClick={handleCancelClick} />
      <input type="button" value="Go Back To The List" onClick={() => navigate('/')} />
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
