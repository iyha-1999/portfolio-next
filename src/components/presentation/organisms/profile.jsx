import Styles from "./profile.module.scss";
import Image from "next/image";

const Profile = ({ data }) => {
  return (
    <>
      <div className={Styles.profile} id={data.id}>
        <div className={Styles.container}>
          <div className={Styles.title}>{data.name}</div>
          <div className={Styles.contents}>
            <div className={Styles.icon}>
              <Image
                src={data.thumbnail}
                width="150"
                height="150"
                alt=""
              ></Image>
            </div>
            <div className={Styles.description}>
              <p className={Styles["description-text"]}>{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
