import React from "react";
import { AnimalItem } from "./AnimalItem";

export const AnimalList = ({ animals }) => {
  if (animals.length === 0) {
    return <h3>アニマルが見つかりません</h3>;
  }
  return (
    <div>
      <ul>
        {animals.map((animal) => (
          <AnimalItem animal={animal} />
        ))}
      </ul>
    </div>
  );
};
