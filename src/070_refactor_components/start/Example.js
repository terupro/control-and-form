import React, { useState } from "react";
import { AnimalFilter } from "./components/AnimalFilter";
import { AnimalList } from "./components/AnimalList";

const Example = () => {
  const [filterVal, setFilterVal] = useState();
  const animals = ["Dog", "Cat", "Rat"];

  const filterdAnimals = animals.filter(
    (animal) => animal.indexOf(filterVal) !== -1
  );

  return (
    <>
      <AnimalFilter filterState={[filterVal, setFilterVal]} />
      <AnimalList animals={filterdAnimals} />
    </>
  );
};

export default Example;
