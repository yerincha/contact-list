import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
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
      const filteredList = list.filter((item) => item.id !== contact.id);
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
      <button type="button" onClick={handleCreateClick}>
        Create New Contact
      </button>
      <ContactList
        list={list}
        setSelectedContact={setSelectedContact}
        handleOpenDeleteModal={handleOpenDeleteModal}
      />
    </>
  );
}
Home.propTypes = {
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
  setSelectedContact: PropTypes.func.isRequired,
};
