import React, { useState } from "react";
import storyData from "../../data/storyDate";

const StoryDisplay = () => {
  const [currentId, setCurrentId] = useState(1);
  const currentScene = storyData.find((scene) => scene.id === currentId);

  return (
    <div className="app">
      <img src={currentScene.image} alt="Story scene" />
      <p>{currentScene.text}</p>
      <div>
        {currentScene.choices.map((choice) => (
          <button key={choice.text} onClick={() => setCurrentId(choice.nextId)}>
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StoryDisplay;
