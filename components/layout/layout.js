import styles from "./layout.module.css";
import Header from "./header";

function Layout(props) {
  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={` ${styles.tab} ${isOpen ? styles.moveLeft : ""} `}>
      <Link href={`/${name}`} legacyBehavior>
        <a
        onClick={() => handleClick(name)}
        >
            <span>
              Hello
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
            {/* <AnimatedSections /> */}
            {props.children}
          </section>
        </div>
      )}
    </div>
      {/* <main>{props.children}</main> */}
    </div>
  );
}

export default Layout;
