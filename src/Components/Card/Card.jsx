import React from "react";

export const Card = ({imgCharacter, nameCharacter, quoteCharacter}) => {
  return (
    <>
      <div className="card-simpson">
        <img src={imgCharacter}/>
        <h2>{nameCharacter}</h2>
        <p>{quoteCharacter}</p>
      </div>
    </>
  );
};
