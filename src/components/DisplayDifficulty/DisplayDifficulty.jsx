import s from "./style.module.css";

function DisplayDifficulty(props) {
  return (
    <div className={s.container}>
      {props.difficulty
        ? `Set Difficulty to : ${props.difficulty} `
        : "No difficulty to display"}
    </div>
  );
}

export default DisplayDifficulty;
