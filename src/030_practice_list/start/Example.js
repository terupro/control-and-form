import Profile from "./components/Profile";

const Example = () => {
  const items = [
    { name: "Geo", age: 18, hobbies: ["sports", "music"] },
    { name: "Tom", age: 25, hobbies: ["movie", "music"] },
    { name: "Lisa", age: 21, hobbies: ["sports", "travel", "game"] },
  ];
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.name}>
            <Profile {...item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Example;
