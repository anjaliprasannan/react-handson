import { useState } from "react";

export function CounterName() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

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
