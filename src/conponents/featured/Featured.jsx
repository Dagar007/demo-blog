import styles from "./featured.module.css"
import Image from "next/image";

export default function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey devs,</b> 
          Welcome to world of <b>.Net</b>!</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image className={styles.image} src="/p1.jpeg" alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h1>
          <p className={styles.postDescription}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
          galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
           the leap into electronic typesetting, remaining essentially.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}
