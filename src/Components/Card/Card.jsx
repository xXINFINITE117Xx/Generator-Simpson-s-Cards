import React from "react";

export const Card = ({imgCharacter, nameCharacter, quoteCharacter}) => {
  return (
    <>
      <div className="card-simpson">
        <img src={imgCharacter} alt={nameCharacter} />
        <h2>{quoteCharacter}</h2>
        <p></p>
      </div>
    </>
  );
};
