import React from 'react';
import PropTypes from 'prop-types';

export default function DeleteModal({contact, handleDeleteTrue, handleDeleteFalse}) {
  return (
    <div className="modal">
      <div className="modal_box">
        <h3>Are you sure?</h3>
        <h4>
          The contact of
          <strong style={{color: 'blue'}}>{` ${contact.firstName} ${contact.lastName} `}</strong>
          will be <strong style={{color: 'red'}}>deleted</strong>
        </h4>
        <div className="modal-button-container">
          <button
            type="button"
            className="modal-button-cancel"
            area-aria-label="Cancel"
            onClick={handleDeleteFalse}
          >
            Cancel
          </button>
          <button
            type="button"
            className="modal-button-delete"
            area-aria-label="Delete"
            onClick={handleDeleteTrue}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
DeleteModal.propTypes = {
  handleDeleteTrue: PropTypes.func.isRequired,
  handleDeleteFalse: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
