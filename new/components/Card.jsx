import styles from "../styles/card.module.css";
const Card=({item})=>{
    return(
        <div className={styles.card}>
            <img src={item.image} alt=""/>  
            <h1>{item.name}</h1>
            <h3>{item.price}</h3>
            <button className="btn">Order Now</button>
        </div>  
    )
}
export default Card;