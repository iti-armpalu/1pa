// components/ResourceCard.js
import Image from "next/image";
import Link from "next/link";
import ArrowOpenIcon from "../../public/icons/arrow-open.svg";
import styles from "./page.module.css";

const ResourceCard = ({ resource, isListView }) => {
  return (
    <Link key={resource.id} href={resource.link} className={styles.card}>
      <Image
        src={resource.image}
        alt={resource.title}
        width={isListView ? 178 : 446}
        height={isListView ? 100 : 250}
        className={styles.image}
      />
      <div>
        <h2 className={styles.resourceTitle}>{resource.title}</h2>
        <p className={styles.date}>{resource.date}</p>
      </div>

      <button className={styles.formatButton}>{resource.format}</button>

      <div className={styles.arrow}>
        <Image
          src={ArrowOpenIcon}
          alt="Arrow Open Icon"
          className={styles.icon}
        />
      </div>
    </Link>
  );
};

export default ResourceCard;
