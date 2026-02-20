import { useState } from "react"
import styles from "../styles/list.module.css";
export default function List() {
    const [users, setUsers] = useState([
        { id: 1, name: "nandha", age: 22, email: "nandha@gmail.com" },
        { id: 2, name: "naveen", age: 23, email: "naveen@gmail.com" },
        { id: 3, name: "karthi", age: 21, email: "karthi@gmail.com" },
        { id: 4, name: "sriyokeswar", age: 24, email:"sriyokeswar@gmail.com"},
    ])
    return (
        <div className={styles.list_container}>
            {users.map(user => (
                <div>
                    <h2>User {user.id}</h2>
                    <ul key={user.id} style={{marginBottom:"10px"}}>
                        <li>Name:{user.name}</li>
                        <li>Age:{user.age}</li>
                        <li>Email:{user.email}</li>
                    </ul>
                </div>
            ))}
        </div>
    )
}