import { useState } from "react";

const Example = () => {
  const [checked, setChecked] = useState();
  const changeChecked = () => setChecked((prevChecked) => !prevChecked);
  return (
    <div>
      <label>
        チェック
        <input type="checkbox" value={checked} onChange={changeChecked} />
        <div>{checked ? "ON" : "OFF"}</div>
      </label>
    </div>
  );
};

export default Example;
