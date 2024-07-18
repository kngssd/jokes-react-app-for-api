import "./App.css";
import React from "react";
import JokesList from "./components/JokesList";
import NewJokeForm from "./components/NewJokeForm";

export default function App() {
  return (
    <div className="App">
      <JokesList />
      <NewJokeForm />
    </div>
  );
}
