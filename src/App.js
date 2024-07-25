import { useState } from "react";
import DisplayDifficulty from "./components/DisplayDifficulty/DisplayDifficulty";

import MenuList from "./components/MenuList/MenuList";
import s from "./style.module.css";

function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("Low");

  // eslint-disable-next-line no-unused-vars
  const updateDifficulty = (difficulty) => {
    setCurrentDifficulty(difficulty);
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}> Select your React difficulty</h1>
      <div className={s.workspace}>
        <MenuList
          difficulty={currentDifficulty}
          onItemClick={updateDifficulty}
        />
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>
    </div>
  );
}

export default App;
