import styles from "./index.module.css";
import cat from "../../img/Cat_August_2010-4.jpg";

const Main = () => {
    return (
        <>
            <p>My image</p>
            <img 
                src={cat}
                alt="cat" 
                className={styles.cat}
            />
        </>
    )
}

export default Main;