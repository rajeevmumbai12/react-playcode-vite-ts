import { useState } from "react";
import "./App.css";
import { ExerciseInstructions } from "./components/ExerciseInstructions";
import { Exercise1 } from "./EXERCISES/Exercise1";
import { Exercise2 } from "./EXERCISES/Exercise2";
import { Exercise3 } from "./EXERCISES/Exercise3";

const getSelectedExerciseFromStore = () => {
  const existingSelection = localStorage.getItem(
    "/InterviewApp/selectedExercise"
  );

  return existingSelection
    ? isNaN(Number(existingSelection))
      ? 0
      : Number(existingSelection)
    : 0;
};

function App() {
  const [selectedExercise, setSelectedExercise] = useState<number>(
    getSelectedExerciseFromStore()
  );
  const [instructionsOpen, setInstructionsOpen] = useState<boolean>(true);

  const exercise1Content = (
    <div className="exerciseContainer">
      <ExerciseInstructions
        isOpen={instructionsOpen}
        onOpenToggle={() => setInstructionsOpen(!instructionsOpen)}
        title="Build a todo application"
      >
        <p>The application should provide the following features:</p>
        <ul>
          <li>Allow users to create a new todo</li>
          <li>Show all the todos in a list</li>
          <li>Allow users to complete todos</li>
        </ul>
        <p>Bonus Features</p>
        <ul>
          <li>Allow users to delete todos</li>
          <li>Allow users to search todos</li>
          <li>Allow users to sort todos</li>
        </ul>
      </ExerciseInstructions>
      <Exercise1 />
    </div>
  );

  const exercise2Content = (
    <div className="exerciseContainer">
      <ExerciseInstructions
        isOpen={instructionsOpen}
        onOpenToggle={() => setInstructionsOpen(!instructionsOpen)}
        title="Create a countdown timer"
      >
        <p>The application should provide the following features:</p>
        <ul>
          <li>
            Allow the user to enter a specified date and time as the countdown
            target
          </li>
          <li>
            Display a human-readable format of the remaining time, such as "4
            days, 2 hours, 30 minutes, 14 seconds"
          </li>
          <li>Update the countdown timer on regular intervals</li>
        </ul>
        <p>Bonus Features</p>
        <ul>
          <li>Change the style if countdown is close to completing</li>
        </ul>
      </ExerciseInstructions>
      <Exercise2 />
    </div>
  );

  const exercise3Content = (
    <div className="exerciseContainer">
      <ExerciseInstructions
        isOpen={instructionsOpen}
        onOpenToggle={() => setInstructionsOpen(!instructionsOpen)}
        title="Retrieve data from an api"
      >
        <p>The application should provide the following features:</p>
        <ul>
          <li>Allow a user to enter an ID to look up data from the API</li>
          <li>Retrieve data from the endpoint and display it to the user</li>
          <li>Cache responses from the API</li>
        </ul>
        <p>Bonus Features</p>
        <ul>
          <li>Allow lookup of multiple IDs at once</li>
        </ul>
      </ExerciseInstructions>
      <Exercise3 />
    </div>
  );

  const handleTabClick = (selectedTab: number) => {
    localStorage.setItem(
      "/InterviewApp/selectedExercise",
      selectedTab.toString()
    );
    setSelectedExercise(selectedTab);
  };

  const getExerciseContent = () => {
    switch (selectedExercise) {
      case 0:
        return exercise1Content;
      case 1:
        return exercise2Content;
      case 2:
        return exercise3Content;
    }
    return null;
  };

  const getTabClassNames = (tabId: number): string => {
    let className = "tab";
    if (selectedExercise === tabId) className += " selectedTab";
    return className;
  };

  return (
    <div className="App">
      <div className="tabContainer">
        <div className={getTabClassNames(0)} onClick={() => handleTabClick(0)}>
          Exercise 1
        </div>
        <div className={getTabClassNames(1)} onClick={() => handleTabClick(1)}>
          Exercise 2
        </div>
        <div className={getTabClassNames(2)} onClick={() => handleTabClick(2)}>
          Exercise 3
        </div>
      </div>
      {getExerciseContent()}
    </div>
  );
}

export default App;
