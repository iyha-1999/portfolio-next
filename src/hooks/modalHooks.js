import { useState } from "react";

const useModal = () => {
  const [modalStatus, setModalStatus] = useState(false);

  const openModal = () => {
    setModalStatus(true);
  };

  const closeModal = () => {
    setModalStatus(false);
  };

  return {
    modalStatus,
    closeModal,
    openModal,
  };
};

export default useModal;
