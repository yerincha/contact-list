import './index.css';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export default function ContactListEntry({item, setSelectedContact}) {
  const navigate = useNavigate();
  const handleContentClick = (e, item) => {
    e.preventDefault();
    setSelectedContact(item);
    navigate('/edit');
  };

  return (
    <div className="data-card">
      <h3>
        {item.firstName} {item.lastName}
      </h3>
      <h4>{item.phone}</h4>
      <p>{item.email}</p>
      <button className="link-text" onClick={(e) => handleContentClick(e, item)}>
        Edit Contact
      </button>
      <button className="link-text">Delete Contact</button>
    </div>
  );
}
