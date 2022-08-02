const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  return (
    <>
      <h3>配列の操作</h3>
      {animals.map((animal) => (
        <li key={animal}>Hello, {animal}</li>
      ))}
    </>
  );
};

export default Example;
