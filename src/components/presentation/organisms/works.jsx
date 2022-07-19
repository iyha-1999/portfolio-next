import Styles from "./works.module.scss";

const Works = ({ modalStores, data, clickedThumbnail = () => {} }) => {
  return (
    <>
      <div className={Styles.works} id="works">
        <div className={Styles.container}>
          <div className={Styles.title}>works</div>
          <div className={Styles.contents}>
            {data.cards.map((_, index) => (
              <div
                className={Styles.card}
                key={_.title}
                onClick={() => {
                  clickedThumbnail();
                  modalStores[index].openModal();
                }}
              >
                <div className={Styles.thumbnail}>
                  <img
                    src={_.thumbnail}
                    className={Styles["thumbnail-image"]}
                    alt=""
                  />
                </div>
                <p className={Styles["card-title"]}>{_.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
