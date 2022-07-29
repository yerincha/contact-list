import React from 'react';

export default function Modal({handleDeleteTrue, handleDeleteFalse}) {
  return (
    <div className="modal">
      <div className="modal_box">
        <p>You sure you wanna delete?</p>
        <button type="button" className="modal_buttonCancel" onClick={handleDeleteFalse}>
          Cancel
        </button>
        <button type="button" onClick={handleDeleteTrue} className="modal_buttoDelete">
          Confirm
        </button>
      </div>
    </div>
  );
}
