import React, { useState } from "react";

const UseStateExample = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  const [user, setUser] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(user);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(user);

    const inputName = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [inputName]: value });
  };

  // *DRY => Don't Repeat Yourself.

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        name="name"
        id="name"
        className="border border-2"
      />
      <input
        onChange={handleChange}
        type="text"
        name="email"
        id="email"
        className="border border-2"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UseStateExample;
