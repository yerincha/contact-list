import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home(props) {
  const navigate = useNavigate();
  const handleContentClick = (e, item) => {
    e.preventDefault();
    props.setSelectedContact(item);
    navigate('/edit');
  };

  return props.list.map((item) => (
    <div key={item.id} onClick={(e) => handleContentClick(e, item)}>
      <div>{item.firstName}</div>
      <div>{item.lastName}</div>
      <div>{item.phone}</div>
      <div>{item.email}</div>
    </div>
  ));
}
