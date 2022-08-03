import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ContactListEntry({item, setSelectedContact, handleOpenDeleteModal}) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleContentClick = (e, selected) => {
    e.preventDefault();
    setSelectedContact(selected);
    navigate('/edit');
  };

  const handleDeleteClick = (e, selected) => {
    e.preventDefault();
    handleOpenDeleteModal();
    setSelectedContact(selected);
  };

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="data-card">
      <h3>
        {item.firstName} {item.lastName}
      </h3>
      <h4> Phone: {item.phone}</h4>
      {expanded && <h4 className="email">Email: {item.email}</h4>}
      <button type="button" aria-labelledby="expand" onClick={handleExpand}>
        {expanded ? 'Show less' : 'View All Information'}
      </button>

      <button type="button" className="edit-contact" onClick={(e) => handleContentClick(e, item)}>
        Edit Contact
      </button>
      <button type="button" className="delete-contact" onClick={(e) => handleDeleteClick(e, item)}>
        Delete Contact
      </button>
    </div>
  );
}
ContactListEntry.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  handleOpenDeleteModal: PropTypes.func.isRequired,
  setSelectedContact: PropTypes.func.isRequired,
};
