import Image from "next/image"
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="" width={50} height={50}/>
          <h1 className={styles.logoText}>Dotnet World</h1>
        </div>
        <p className={styles.logo}>

        </p>
      </div>
      <div className={styles.links}>

      </div>
    </div>
  )
}
