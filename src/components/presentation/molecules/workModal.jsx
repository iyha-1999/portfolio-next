import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons/faCircleXmark";
import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import Image from "next/image";
import Styles from "./workModal.module.scss";
import Modal from "../../presentation/atoms/modal";
import Tab from "../../presentation/atoms/tab";

const WorkModal = ({
  modalStatus,
  closeModal,
  title,
  description,
  links,
  developmentEnvironmentDetail,
  thumbnails,
  clickedCloseButton,
}) => {
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
          clickedCloseButton();
          setOverlayShow(false);
          setContentsShow(false);
        }}
        modalWrapStyle={Styles.modal}
        contentsWrapStyle={`${Styles["modal-contents"]} ${
          contentsShow ? Styles["modal-contents__show"] : ""
        }`}
        contentsElm={
          <>
            <div
              className={Styles["modal-titleAndDevelopmentEnvironment__wrap"]}
            >
              <div className={Styles["modal-title"]}>{title}</div>
              <p className={Styles["modal-description"]}>{description}</p>
              <p className={Styles["modal-link__wrapper"]}>
                {links.map((_, index) => (
                  <a
                    key={index}
                    rel="noreferrer"
                    target="_blank"
                    href={_.url}
                    className={Styles["modal-link"]}
                  >
                    <FontAwesomeIcon
                      icon={
                        _.icon === "link" ? (
                          faLink
                        ) : _.icon === "gitHub" ? (
                          faGithub
                        ) : (
                          <></>
                        )
                      }
                      className={Styles["modal-faLink"]}
                    />
                    {_.title}
                    <br />
                  </a>
                ))}
              </p>
              <div className={Styles["modal-title"]}>使用言語、ツール</div>
              <p className={Styles["modal-developmentEnvironmentDetail"]}>
                {developmentEnvironmentDetail}
              </p>
            </div>
            <div className={Styles["modal-thumbnails"]}>
              <Tab
                buttonsWrapStyle={Styles["modal-tab-buttons__wrap"]}
                buttonElms={thumbnails.map((_, index) => (
                  <div key={index} className={Styles["modal-thumbnail"]}>
                    <Image
                      src={_}
                      alt=""
                      layout={"fill"}
                      objectFit={"contain"}
                    />
                  </div>
                ))}
                contentsWrapStyle={Styles["modal-tab-contents__wrap"]}
                contentsElms={thumbnails.map((_, index) => (
                  <img
                    className={Styles["modal-thumbnail__main"]}
                    src={_}
                    alt=""
                    key={index}
                  />
                ))}
              ></Tab>
            </div>
            <div className={Styles["modal-mainImage"]}></div>
          </>
        }
        overlayStyle={`${Styles["modal-overlay"]} ${
          overlayShow ? Styles["modal-overlay__show"] : ""
        }`}
        closeButtonWrapStyle={Styles["modal-closeButton__wrap"]}
        closeButtonElm={
          <FontAwesomeIcon
            icon={faCircleXmark}
            className={Styles["modal-faCircleXmark"]}
          />
        }
      ></Modal>
    </>
  );
};

export default WorkModal;
