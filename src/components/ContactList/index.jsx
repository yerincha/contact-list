import React, {useState} from 'react';
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
