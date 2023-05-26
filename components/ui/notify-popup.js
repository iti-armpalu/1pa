import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./notify-popup.module.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function NotifyPopup(props) {
  const { isNotifyPopupOpen, onClose } = props;

  return (
   <div className={`${styles.popup} ${isNotifyPopupOpen ? styles.animateIn : styles.animateOut}`}>
    <div className={styles.popupContainer}> 
      <div className={`${styles.content} ${styles.blockRounded}`}>

        <button
          className={styles.popupClose}
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <div className={styles.title}>
          <h6>
            Get to know about our launch!
          </h6>
          <p>Subscribe to our newsletter and we will send you a notification about the launch of our brand new site</p>
        </div>
        <div className={styles.formContainer}>
          <form>
  
          
            
                    <input className="" type="email" name="Email" placeholder="Your Email" required />
               
                  
                
               
                    <button 
                      className={`${styles.btn} ${styles.btnL} ${styles.btnLight}`}
                      type="submit">
                      <span className={styles.btnTitle}>Submit</span>
                      <span className={styles.btnHover}>Submit</span>
                    </button>
               

      


          </form>
        </div>

      </div>
    </div>
   </div>
  );
}
