import React, { useState } from "react";

const TabButton = ({ buttons }) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  return (
    <>
      {buttons.map((_, index) => (
        <div
          className={`${_.styleDefaultButton} ${
            activeButtonIndex === index ? _.buttonActiveStyle : ""
          }`}
          onClick={() => {
            setActiveButtonIndex(index);
          }}
          key={index}
        >
          {_.elm}
        </div>
      ))}
    </>
  );
};

export default TabButton;
