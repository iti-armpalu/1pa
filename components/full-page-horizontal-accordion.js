import styles from "./full-page-horizontal-accordion.module.css";

function FullPageHorizontalScroll() {


  return (
    <div classNameName={styles.main}>
                {/* <nav className={styles.barNavigation}>
            <ul className={styles.navList} style={{ '--total': 4}}>
              <li
                className={`${styles.navItem}`}
                style={{ '--i': 0 }}
                tabIndex={1}
                
              >
                Hello
              </li>
              <li
                className={`${styles.navItem}`}
                style={{ '--i': 1 }}
                tabindex={2}
              ></li>
              <li
                className={styles.navItem}
                style={{ '--i': '2' }}
                tabindex={3}
              ></li>
              <li
                className={styles.navItem}
                style={{ '--i': '3' }}
                tabindex={4}
              ></li>
            </ul>
          </nav> */}

<ul className="nav">
  <li className="nav-item">
    <a 
      className="nav-link active" 
      aria-current="page" 
      href="#">
        Active
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
</ul>
    </div>
  );
}

export default FullPageHorizontalScroll;
