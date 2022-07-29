import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import ContactList from '../../components/ContactList';

export default function Home({list, setSelectedContact}) {
  const navigate = useNavigate();
  const handleCreateClick = (e) => {
    e.preventDefault();
    navigate('/create');
  };

  return (
    <>
      <button onClick={handleCreateClick}>Create New Contact</button>
      <ContactList list={list} setSelectedContact={setSelectedContact} />
    </>
  );
}
