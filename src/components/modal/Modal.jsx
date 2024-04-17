import "./modal-module.scss";

const Modal = ({ title, text, status, closeModal }) => {
  if (!status) return;

  const defaultValues = ["", "", false];

  return (
    <div className="modal">
      <div className="modal__content">
        <button
          onClick={() =>
            closeModal(defaultValues[0], defaultValues[1], defaultValues[2])
          }
          className="modal__btn"
        >
          <span></span>
          <span></span>
        </button>
        <h2 className="modal__title">{title}</h2>
        <p className="modal__text">{text}</p>
      </div>
    </div>
  );
};

export default Modal;
