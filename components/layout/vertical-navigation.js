import { Fragment, useRef } from "react";

import styles from "./vertical-navigation.module.css";
import { Link as LinkScroll } from "react-scroll";

function VerticalNavigation(props) {
  const { id, name, section } = props.scrollElement;
  const { selected, handleClick, isActive, activeSection, scrollTo, goToSectionRef } = props;

  return (
    <Fragment>
      <li id={id} className={styles.indicator}>
        {/* <button
        className={` ${styles.link} ${isActive ? styles.selected : ""} ${activeSection === `section${id}`  ? styles.selected : ""} `}
        onClick={() => scrollTo(goToSectionRef, id)}>
               
            </button>
            <span className={` ${activeSection === `section${id}` ? styles.active : ''}`}>{name}</span> */}
        <LinkScroll
          onClick={() => handleClick(id)}
          // className={` ${styles.link} ${isActive ? styles.selected : ""} ${activeSection === `section${id}` ? styles.selected : ''}`}
          className={` ${styles.link} ${activeSection === `section${id}`  ? styles.selected : ""} `}
          to={`section${id}`}
          spy={true}
          smooth={true}
          duration={500}
        ></LinkScroll>
        <span className={` ${activeSection === `section${id}` ? styles.active : ''}`}>{name}</span>
      </li>
    </Fragment>
  );
}

export default VerticalNavigation;
