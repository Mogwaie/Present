import React, { useState } from "react";
import storyData from "../../data/storyDate";

const StoryDisplay = () => {
  const [currentId, setCurrentId] = useState(1);
  const [nextMode, setNextMode] = useState(false);
  const [nextCount, setNextCount] = useState(0);
  const MAX_NEXT = 3;

  const currentScene = storyData.find((scene) => scene.id === currentId);

  const handleChoice = (nextId) => {
    setCurrentId(nextId);
    setNextMode(true);
    setNextCount(0);
  };

  const handleNext = () => {
    const nextId = currentId + 1;
    setCurrentId(nextId);
    setNextCount((prev) => prev + 1);
    if (nextCount + 1 >= MAX_NEXT) {
      setNextMode(false);
    }
  };

  return (
    <div className="app">
      <img src={currentScene.image} alt="Story scene" />
      <p>{currentScene.text}</p>
      <div>
        {nextMode ? (
          <button onClick={handleNext}>Next</button>
        ) : (
          currentScene.choices.map((choice) => (
            <button
              key={choice.text}
              onClick={() => handleChoice(choice.nextId)}
            >
              {choice.text}
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default StoryDisplay;
