import {confirmAlert} from 'react-confirm-alert';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import ContactList from '../../components/ContactList';
import Modal from '../../components/Modal';
export default function Home({list, setList, contact, setSelectedContact}) {
  const navigate = useNavigate();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const handleCreateClick = (e) => {
    e.preventDefault();
    navigate('/create');
  };
  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  const handleDeleteTrue = () => {
    if (openDeleteModal) {
      let filteredList = list.filter((item) => item.id !== contact.id);
      setList(filteredList);
      setOpenDeleteModal(false);
    }
  };

  const handleDeleteFalse = () => {
    setOpenDeleteModal(false);
  };
  return (
    <>
      {openDeleteModal && (
        <Modal handleDeleteTrue={handleDeleteTrue} handleDeleteFalse={handleDeleteFalse} />
      )}
      <button onClick={handleCreateClick}>Create New Contact</button>
      <ContactList
        list={list}
        setSelectedContact={setSelectedContact}
        handleOpenDeleteModal={handleOpenDeleteModal}
      />
    </>
  );
}
