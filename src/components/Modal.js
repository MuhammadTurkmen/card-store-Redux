import React from "react";

const Modal = () => {
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from shopping card?</h4>
        <div className="btn-container">
          <button type="button" className="btn confirm-btn">
            confirm
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
