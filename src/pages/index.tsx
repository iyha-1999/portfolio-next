import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.scss";
import Layout from "../components/presentation/layouts/layout";
import useSWR from "swr";

const Home: NextPage = () => {
  const fetchContents = async () => {
    const response = await fetch("/api/contents");
    const data = await response.json();
    return data;
  };

  const { data, error } = useSWR("/api/contents", fetchContents);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Layout contentsData={data.contents}>
      <div>test</div>
    </Layout>
  );
};

export default Home;
