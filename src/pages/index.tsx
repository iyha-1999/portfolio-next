import type { GetStaticProps, NextPage } from "next";
import useModal from "../hooks/modalHooks";

import type {
  Profile as TProfile,
  Works as TWorks,
  WorkCard as TWorkCard,
} from "../types/contents";

import Layout from "../components/presentation/layouts/layout";
import Profile from "../components/presentation/organisms/profile";
import Works from "../components/presentation/organisms//works";
import WorkModal from "../components/presentation/molecules/workModal";

type Props = {
  allContentsData: TProfile;
  profileData: TProfile;
  worksData: TWorks;
};

const Home: NextPage<Props> = ({ allContentsData, profileData, worksData }) => {
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

  return (
    <Layout contentsData={allContentsData}>
      {worksData.cards.map((_: TWorkCard, index: number) => (
        <WorkModal
          key={index}
          modalStatus={workModalStores[index].modalStatus}
          closeModal={workModalStores[index].closeModal}
          title={_.title}
          description={_.description}
          links={_.links}
          developmentEnvironmentDetail={_.developmentEnvironment}
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

export async function getStaticProps() {
  const response = await fetch("https://n-j-pf.com/api/contents");
  const data = await response.json();

  return {
    props: {
      allContentsData: data.contents,
      profileData: data.contents[0],
      worksData: data.contents[1],
    },
  };
}

export default Home;
