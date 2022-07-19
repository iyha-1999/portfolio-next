import React, { useState } from "react";

const Tab = ({
  buttonElms,
  contentsElms,
  buttonsWrapStyle,
  contentsWrapStyle,
}) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  return (
    <>
      <div className="tab">
        <div className={buttonsWrapStyle}>
          {buttonElms.map((_, index) => (
            <div
              className="tab-button"
              onClick={() => {
                setActiveButtonIndex(index);
              }}
              key={index}
            >
              {_}
            </div>
          ))}
        </div>
        <div className={contentsWrapStyle}>
          {contentsElms.map((_, index) => {
            return activeButtonIndex === index ? (
              <div className="tab-contents" key={index}>
                {_}
              </div>
            ) : (
              ""
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Tab;
