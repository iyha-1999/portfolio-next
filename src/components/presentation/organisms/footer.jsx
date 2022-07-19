import Styles from "./footer.module.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons/faCircleChevronUp";

const Footer = () => {
  return (
    <>
      <div className={Styles.footer}>
        <AnchorLink
          href="#profile"
          offset="50"
          className={Styles["footer-anchorLink"]}
        >
          <FontAwesomeIcon
            icon={faCircleChevronUp}
            className={Styles["footer-faCircleChevronUpIcon"]}
          />
        </AnchorLink>
        <div className={Styles["footer-faCircleChevronUpIcon__bg"]}></div>
        <div className={Styles["footer-title"]}>
          <div className={Styles.title}>© 2022 N.J</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
