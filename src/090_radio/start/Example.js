import { useState } from "react";

const Example = () => {
  const [fruit, setFruit] = useState("Apple");
  const onChange = (e) => setFruit(e.target.value);

  const FRUIT_LIST = ["Apple", "Grape", "Remon"];

  return (
    <div>
      {FRUIT_LIST.map((value) => {
        return (
          <label key={value}>
            <input
              type="radio"
              value={value}
              checked={fruit === value}
              onChange={onChange}
            />
            {value}
          </label>
        );
      })}
      <h3>私は{fruit}が食べたい</h3>
    </div>
  );
};

export default Example;
