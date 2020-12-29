import React from "react";

const Modal = ({ canShow, updateModalState, children }) => {
  if (canShow) {
    return (
      <div class="modal-is-active">
        <div class="modal-background"></div>
        <div class="modal-content">{children}</div>
        <button
          onClick={updateModalState}
          class="modal-close is-large"
          aria-label="close"
        ></button>
      </div>
    );
  }

  return null;
};

export default Modal;