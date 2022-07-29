import React from 'react';
import PropTypes from 'prop-types';

import ContactListEntry from './ContactListEntry';

export default function ContactList({list, setSelectedContact, handleOpenDeleteModal}) {
  return (
    <section className="page-contain">
      {list.map((item) => (
        <div key={item.id}>
          <ContactListEntry
            item={item}
            setSelectedContact={setSelectedContact}
            handleOpenDeleteModal={handleOpenDeleteModal}
          />
        </div>
      ))}
    </section>
  );
}
ContactList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleOpenDeleteModal: PropTypes.func.isRequired,
  setSelectedContact: PropTypes.func.isRequired,
};
