import Profile from "./components/Profile";
import { useState } from "react";
const persons = [
  {
    name: "Geo",
    age: 18,
    hobbies: ["sports", "music"],
  },
  {
    name: "Tom",
    age: 25,
    hobbies: ["movie", "music"],
  },
  {
    name: "Lisa",
    age: 21,
    hobbies: ["sports", "travel", "game"],
  },
];

const Example = () => {
  const [filter, setFileter] = useState("");
  return (
    <>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFileter(e.target.value)}
      />
      <ul>
        {persons
          .filter((person) => person.name.indexOf(filter) !== -1)
          .map((person) => (
            <li key={person.name}>
              <Profile {...person} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Example;
