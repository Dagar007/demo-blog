import Link from "next/link"
import styles from "./card.module.css"
import Image from "next/image"

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <Image className={styles.image} src="/p1.jpeg" alt="" fill/>
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>11-02-2023 - </span>
                <span className={styles.category}>CULTURE</span>
            </div>
            <Link href="/">
                <h1>Lorem Ipsum is simply dummy text of the printing.</h1>
            </Link>
            
            <p className={styles.desc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
            galley of type and scrambled it to make a type specimen book.
            </p>
            <Link className={styles.link} href="/"> Read More...</Link>
        </div>
    </div>
  )
}

export default Card