import { useState } from "react";
import s from "./style.module.css";

function MenuListItem({ difficulty, onClick, isSelected }) {
  const [isHovered, setIsHovered] = useState(false);

  const getBackgroundColor = () => {
    if (isHovered) {
      return "#a5e9ff";
    } else if (isSelected) {
      return "#26baea";
    } else {
      return "#eff0ef";
    }
  };
  return (
    <div
      style={{ backgroundColor: getBackgroundColor() }}
      className={s.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(difficulty)}
    >
      <span> Set to {difficulty}</span>
    </div>
  );
}

export default MenuListItem;
