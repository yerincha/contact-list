import React, {useState} from 'react';
import ContactListEntry from './ContctListEntry';

export default function ContactList({list, setSelectedContact}) {
  return (
    <section className="page-contain">
      {list.map((item) => (
        <div key={item.id}>
          <ContactListEntry key={item.id} item={item} setSelectedContact={setSelectedContact} />
        </div>
      ))}
    </section>
  );
}
