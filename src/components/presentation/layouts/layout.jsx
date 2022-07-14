import Head from "next/head";
import Styles from "./layout.module.scss";

function Layout({ children }) {
  return (
    <div className={Styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
