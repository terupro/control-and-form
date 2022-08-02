import { useState } from "react";

const Example = () => {
  const [val, setVal] = useState("");
  const clearVal = () => setVal("");

  return (
    <div>
      <label htmlFor="2">ラベル</label>
      <div>
        <input
          id="1"
          type="text"
          placeholder="インプット"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      </div>
      <br />
      <div>
        <textarea
          id="2"
          type="text"
          placeholder="テキストエリア"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      </div>
      <h3>{val}</h3>
      <button onClick={clearVal}>クリア</button>
    </div>
  );
};

export default Example;
