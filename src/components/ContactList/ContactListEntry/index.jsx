import './index.css';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; 

export default function ContactListEntry({item, setSelectedContact, handleOpenDeleteModal}) {
  const navigate = useNavigate();
  const handleContentClick = (e, item) => {
    e.preventDefault();
    setSelectedContact(item);
    navigate('/edit');
  };

  const handleDeleteClick = (e, item) => {
    e.preventDefault();
    handleOpenDeleteModal();
    setSelectedContact(item);
  }
    
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
      <button className="link-text" onClick={(e) => handleDeleteClick(e, item)}>Delete Contact</button>
    </div>
  );
}
