
import { useState } from "react";
import styles from "./side-navigation-bar.module.css";


function SnapScroll() {
  const { name } = props.navItem;

  const [isHover, setHover] = useState(false);

  return (
    <li 
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <a className={`${isHover ? styles.emphasize : styles.translucent}`}>
        {name}
      </a>
    </li>
  );
}

export default SnapScroll;
