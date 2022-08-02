import React from "react";

export const AnimalFilter = ({ filterState }) => {
  const [filterVal, setFilterVal] = filterState;
  return (
    <input
      type="text"
      value={filterVal}
      onChange={(e) => setFilterVal(e.target.value)}
    />
  );
};
