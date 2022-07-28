import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Edit({ contact }) {
  const [editedContact, setEditedContact] = useState({
    firstName: contact.firstName,
    lastName: contact.lastName,
    phone: contact.phone,
    email: contact.email,
  });

  function handleChange(e) {
    const { value } = e.target;
    setEditedContact({
      ...editedContact,
      [e.target.name]: value,
    });
  }

  const navigate = useNavigate();

  return (
    <form>
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
    </form>
  );
}
