import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Edit({ list, contact, setList }) {
  const [editedContact, setEditedContact] = useState({ ...contact });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value } = e.target;
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
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setEditedContact({
      ...contact,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First name
        <input
          type="text"
          name="firstName"
          value={editedContact.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name
        <input type="text" name="lastName" value={editedContact.lastName} onChange={handleChange} />
      </label>
      <label>
        Phone
        <input type="text" name="phone" value={editedContact.phone} onChange={handleChange} />
      </label>
      <label>
        Email
        <input type="text" name="email" value={editedContact.email} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
      <input type="button" value="Cancel" onClick={handleCancelClick} />
    </form>
  );
}
