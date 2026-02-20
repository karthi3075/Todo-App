import styles from "../styles/counter.module.css";
import { useState } from "react";
export default function Counter(){
    const [count,setCount]=useState(0);
    return(
        <div className={styles.container}>
            <h1>Counter</h1>
            <h1>{count}</h1>
            <div>
                <button onClick={()=>setCount(prev=>prev+1)} className={styles.butt} style={{backgroundColor:"green",color:"white"}}>Increase</button>
                <button onClick={()=>setCount(prev=>prev-1)} className={styles.butt} style={{backgroundColor:"red",color:"white"}}>Decrease</button>
                <button onClick={()=>setCount(0)} className={styles.butt} style={{backgroundColor:"skyblue",color:"white"   }}>Reset</button>
            </div>
        </div>
    )
}