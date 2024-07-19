import React from "react";
import { postJoke } from "../ApiCreation";

const NewJokeForm = () => {
  const [jokeText, setJokeText] = React.useState("");
  const [author, setAuthor] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newJoke = { text: jokeText, author: author };
      await postJoke(newJoke);
      setJokeText("");
      setAuthor("");
      alert("Joke added successfully!");
    } catch (error) {
      console.error("Error adding joke:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Joke</h2>
      <input
        type="text"
        value={jokeText}
        onChange={(e) => setJokeText(e.target.value)}
        placeholder="Enter your joke"
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewJokeForm;
