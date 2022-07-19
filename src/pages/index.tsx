import type { NextPage } from "next";
import Head from "next/head";
import useSWR from "swr";
import useModal from "../hooks/modalHooks";

import styles from "../styles/Home.module.scss";
import Layout from "../components/presentation/layouts/layout";
import Profile from "../components/presentation/organisms/profile";
import Works from "../components/presentation/organisms//works";
import WorkModal from "../components/presentation/molecules/workModal";

const Home: NextPage = () => {
  const workModalStores = [
    useModal(),
    useModal(),
    useModal(),
    useModal(),
    useModal(),
    useModal(),
    useModal(),
    useModal(),
    useModal(),
    useModal(),
  ];

  //bodyのスクロールの状態を制御
  const stoppingBodyScroll = () => {
    const elm = document.querySelector("body");
    elm != null ? (elm.style.overflowY = "hidden") : "";
  };
  const cancelBodyScroll = () => {
    const elm = document.querySelector("body");
    elm != null ? (elm.style.overflowY = "auto") : "";
  };

  const fetchContents = async () => {
    const response = await fetch("/api/contents");
    const data = await response.json();
    return data;
  };

  const { data, error } = useSWR("/api/contents", fetchContents);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const profileData = data.contents[0];
  const worksData = data.contents[1];

  return (
    <Layout contentsData={data.contents}>
      {console.log(worksData)}
      {worksData.cards.map((_: any, index: number) => (
        <WorkModal
          key={index}
          modalStatus={workModalStores[index].modalStatus}
          closeModal={workModalStores[index].closeModal}
          title={_.title}
          description={_.description}
          links={_.links}
          developmentEnvironmentDetail={_.developmentEnvironmentDetail}
          thumbnails={_.thumbnails}
          clickedCloseButton={cancelBodyScroll}
        ></WorkModal>
      ))}
      <Profile data={profileData}></Profile>
      <Works
        data={worksData}
        modalStores={workModalStores}
        clickedThumbnail={stoppingBodyScroll}
      ></Works>
    </Layout>
  );
};

export default Home;
