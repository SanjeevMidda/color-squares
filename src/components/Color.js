import React, { useState, useEffect } from "react";

const Color = ({ curve }) => {
  const [color, setColor] = useState("");

  let newColor = () => {
    return Math.floor(Math.random() * 255);
  };

  useEffect(() => {
    setColor(`rgb(${newColor()}, ${newColor()}, ${newColor()})`);

    console.log(color);
  }, []);

  return (
    <div
      className="square"
      style={{ backgroundColor: color, borderRadius: curve }}
      onClick={() =>
        setColor(`rgb(${newColor()}, ${newColor()}, ${newColor()})`)
      }
    >
      <h5>{color}</h5>
    </div>
  );
};

export default Color;
