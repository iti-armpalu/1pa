import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./say-hello-popup.module.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function SayHelloPopup(props) {
  const { isPopupOpen, onClose } = props;

  return (
   <div className={`${styles.popup} ${isPopupOpen ? styles.animateIn : styles.animateOut}`}>
    <div className={styles.popupContainer}> 
      <div className={`${styles.content} ${styles.blockRounded}`}>

        <button
          className={styles.popupClose}
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <div className={styles.title}>
          <p>
            Let's talk!
          </p>
        </div>
        <div className={styles.formContainer}>
          <form>
            <div className="container-fluid px-0">
              <div className="row gx-5">
              <div className="col-12 col-md-6">
                    <input className="" type="text" name="Name" placeholder="Your Name" required />
                  </div>
                  <div className="col-12 col-md-6">
                    <input class="" type="text" name="Company" placeholder="Your Email" required />
                  </div>
                  <div className="col-12">
                    <textarea className="margin-l" name="Message" placeholder="A Few Words" required></textarea>
                  </div>
                  <div className="col-12">
                    <button 
                      className={`${styles.btn} ${styles.btnL} ${styles.btnLight}`}
                      type="submit">
                      <span className={styles.btnTitle}>Send</span>
                      <span className={styles.btnHover}>Send</span>
                    </button>
                  </div>

              </div>

            </div>
          </form>
        </div>

      </div>
    </div>
   </div>
  );
}
