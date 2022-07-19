const Modal = ({
  modalStatus, //開く-閉じるのstate
  closeModal, //stateを閉じるに変更する関数
  closeUpToDelayMilliSeconds = 0, //stateが閉じるに変更されるまでの遅延時間
  closeBefore = () => {}, //閉じるボタンを押した後、stateが閉じるに変更される前に実行される関数
  modalWrapStyle = "", //全体を包むエレメントのスタイル
  contentsWrapStyle = "", //コンテンツを包むエレメントのスタイル
  contentsElm = <></>, //コンテンツのエレメント
  closeButtonWrapStyle = "", //閉じるボタンを包むエレメントのスタイル
  closeButtonElm = <></>, //閉じるボタンのエレメント
  overlayStyle = "", //オーバーレイのスタイル
}) => {
  if (!modalStatus) return <></>;
  return (
    <>
      <div className={modalWrapStyle}>
        {/* contents */}
        <div className={contentsWrapStyle}>
          <div
            className={closeButtonWrapStyle}
            onClick={() => {
              closeBefore();
              setTimeout(closeModal, closeUpToDelayMilliSeconds);
            }}
          >
            {closeButtonElm}
          </div>
          {contentsElm}
        </div>

        {/* closeButton */}
        <div
          className={overlayStyle}
          onClick={() => {
            closeBefore();
            setTimeout(closeModal, closeUpToDelayMilliSeconds);
          }}
        ></div>
      </div>
    </>
  );
};

export default Modal;
