import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function AccordionItem(props) {
  const { name, page } = props.navElement;
  const { isOpen, handleClick } = props;

  return (
    <div className={` ${styles.tab} ${isOpen ? styles.moveLeft : ""} `}>
      <Link href={`/${name}`} legacyBehavior>
        <a
        onClick={() => handleClick(name)}
        >
            <span>
              {name}
            </span>
        </a>
      </Link>
      {/* <button 
        type="button" 
        onClick={() => handleClick(name)}>
          <span>
            {name}
          </span>
      </button> */}
      {isOpen[name] && (
        <div className={` ${styles.content}`}>
          <section className={styles.expertiseHero}>
            <AnimatedSections />
          </section>
        </div>
      )}
    </div>
  );
}
