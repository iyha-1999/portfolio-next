import { useState, useEffect } from "react";
import Styles from "./hamburgerMenuModal.module.scss";
import Modal from "../../presentation/atoms/modal";
import TabButton from "../../presentation/atoms/tabButton";
import AnchorLink from "react-anchor-link-smooth-scroll";

const HamburgerMenuModal = ({ modalStatus, closeModal }) => {
  const [overlayShow, setOverlayShow] = useState(false);
  const [contentsShow, setContentsShow] = useState(false);

  useEffect(() => {
    if (modalStatus) {
      setOverlayShow(true);
      setContentsShow(true);
    }
  }, [modalStatus]);

  return (
    <>
      <Modal
        modalStatus={modalStatus}
        closeModal={closeModal}
        closeUpToDelayMilliSeconds={300}
        closeBefore={() => {
          setOverlayShow(false);
          setContentsShow(false);
        }}
        modalWrapStyle={Styles.modal}
        contentsWrapStyle={`${Styles["modal-contents"]} ${
          contentsShow ? Styles["modal-contents__show"] : ""
        }`}
        contentsElm={
          <>
            <TabButton
              buttons={[
                {
                  styleDefaultButton: Styles["modal-button"],
                  buttonActiveStyle: Styles["modal-button__isActive"],
                  elm: (
                    <AnchorLink
                      href="#profile"
                      offset="50"
                      className={Styles["modal-button__anchorLink"]}
                    >
                      Profile
                    </AnchorLink>
                  ),
                },
                {
                  styleDefaultButton: Styles["modal-button"],
                  buttonActiveStyle: Styles["modal-button__isActive"],
                  elm: (
                    <AnchorLink
                      href="#works"
                      offset="50"
                      className={Styles["modal-button__anchorLink"]}
                    >
                      Works
                    </AnchorLink>
                  ),
                },
              ]}
            ></TabButton>
          </>
        }
        overlayStyle={`${Styles["modal-overlay"]} ${
          overlayShow ? Styles["modal-overlay__show"] : ""
        }`}
      ></Modal>
    </>
  );
};

export default HamburgerMenuModal;
