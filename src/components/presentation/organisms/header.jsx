import Image from "next/image";
import Styles from "./header.module.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = ({ clickedHamburgerMenuButton }) => {
  return (
    <>
      <div className={Styles.header}>
        <div className={Styles.title__wrap}>
          <AnchorLink href="#profile" offset="50">
            <div className={Styles.title}>Portfolio</div>
          </AnchorLink>
        </div>
        <div className={Styles.spNav}>
          <div
            className={Styles.spNav__button}
            onClick={clickedHamburgerMenuButton}
          >
            <Image
              src="/images/icon/bars_24.svg"
              width="100"
              height="100"
              alt=""
            ></Image>
          </div>
        </div>
        <div className={Styles.pcNav}>
          <AnchorLink href="#profile" offset="50">
            <div
              className={Styles.pcNav__button}
              onClick={clickedHamburgerMenuButton}
            >
              profile
            </div>
          </AnchorLink>
          <AnchorLink href="#works" offset="50">
            <div
              className={Styles.pcNav__button}
              onClick={clickedHamburgerMenuButton}
            >
              works
            </div>
          </AnchorLink>
        </div>
      </div>
    </>
  );
};

export default Header;
