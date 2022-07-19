import Head from "next/head";
import Styles from "./layout.module.scss";
import Header from "../organisms/header";
import Footer from "../organisms/footer";
import useModal from "../../../hooks/modalHooks";
import HamburgerMenuModal from "../molecules/hamburgerMenuModal";

function Layout({ children, contentsData }) {
  const hamburgerMenuModalStore = useModal();
  return (
    <div className={Styles.container}>
      <Head>
        <link rel="icon" href="/images/favicon/favicon.ico" />
        <title>Portfolio</title>
      </Head>
      <HamburgerMenuModal
        modalStatus={hamburgerMenuModalStore.modalStatus}
        closeModal={hamburgerMenuModalStore.closeModal}
      ></HamburgerMenuModal>
      <Header
        contentsData={contentsData}
        clickedHamburgerMenuButton={hamburgerMenuModalStore.openModal}
      ></Header>
      {children}
      <Footer></Footer>
    </div>
  );
}

export default Layout;
