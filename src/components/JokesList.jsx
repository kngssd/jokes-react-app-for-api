import React from "react";
import { useEffect } from "react";
import { getAllJokes } from "../ApiCreation";

const JokesList = () => {
  const [jokes, setJokes] = React.useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const jokesData = await getAllJokes();
        setJokes(jokesData);
      } catch (error) {
        console.error("Error fetching jokes:", error);
      }
    };

    fetchJokes();
  }, []);

  return (
    <div>
      <h1>Jokes List</h1>
      <ul>
        {jokes.length > 0 ? (
          jokes.map((joke, index) => (
            <li key={index} className="joke-item">
              <p>
                <strong>Text:</strong> {joke.text}
              </p>
              <p>
                <strong>Author:</strong> {joke.author}
              </p>
            </li>
          ))
        ) : (
          <p>Sorry, no jokes</p>
        )}
      </ul>
    </div>
  );
};

export default JokesList;
