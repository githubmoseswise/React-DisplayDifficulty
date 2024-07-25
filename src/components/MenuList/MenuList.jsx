import MenuListItem from "../MenuListItem/MenuListItem";
import s from "./style.module.css";
import { DIFFICULTIES } from "../../constant";

function MenuList({ difficulty, onItemClick }) {
  return (
    <div className={s.container}>
      {DIFFICULTIES.map((item, index) => (
        <MenuListItem
          key={index}
          difficulty={item}
          onClick={onItemClick}
          isSelected={difficulty === item}
        />
      ))}
    </div>
  );
}

export default MenuList;
