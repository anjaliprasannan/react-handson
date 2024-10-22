import { useEffect, useState } from "react";

export function UseEffect() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    console.log("Render");
  });
  useEffect(() => {
    console.log("Hi");
    return () => {
      console.log("Bye");
    };
  }, []);
  useEffect(() => {
    document.title = name;
    const timeout = setTimeout(() => {
      console.log(`My name is ${name}`);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [name]);

  useEffect(() => {
    console.log(`My name is ${name} and I am ${age} years old`);
  }, [name, age]);

  return (
    <>
      <label>Name:</label>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
      />
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => setAge(age + 1)}>+</button>
      {age}
      <button onClick={() => setAge(age - 1)}>-</button>
      <br />
      <br />
      <br />
      <br />
      My name is {name} and I am {age} years old
    </>
  );
}
