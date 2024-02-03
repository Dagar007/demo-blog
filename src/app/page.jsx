import Featured from "@/conponents/featured/Featured";
import styles from "./homepage.module.css"
import CategoryList from "@/conponents/categoryList/CategoryList";
import CardList from "@/conponents/cardList/CardList";
import Menu from "@/conponents/menu/Menu";
export default function Home() {
  return <div className={styles.container}>
    <Featured />
    <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu /> 
      </div>
  </div>;
}

