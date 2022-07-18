import Head from "next/head";
import Styles from "./layout.module.scss";
import Header from "../organisms/header";

function Layout({ children, contentsData }) {
  return (
    <div className={Styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header contentsData={contentsData}></Header>
      {children}
    </div>
  );
}

export default Layout;
