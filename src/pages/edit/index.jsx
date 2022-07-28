import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Edit(props) {
  const navigate = useNavigate();
  const handleContentClick = (e, item) => {
    e.preventDefault();
    props.setSelectedContact(item);
    navigate('/edit');
  };

  return (
    <div key={props.contact.id}>
      <div>{props.contact.firstName}</div>
      <div>{props.contact.lastName}</div>
      <div>{props.contact.phone}</div>
      <div>{props.contact.email}</div>
    </div>
  );
}
