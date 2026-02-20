import { useEffect, useState } from "react"
import axios from "axios"

export default function Api() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(response.data)
        setData(response.data)
    }
    return (
        <div className="bg-gray-100 flex justify-center items-center min-h-screen p-5">
            <div className="overflow-x-auto w-full max-w-4xl">
                <table className="w-full bg-white shadow-lg rounded-xl">

                    <thead className="bg-blue-600 text-white">
                        <tr>
                            <th className="py-3 px-6 ">Name</th>
                            <th className="py-3 px-6 ">Email</th>
                            <th className="py-3 px-6 ">City</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((user, index) => (
                            <tr
                                key={index}
                                className="border-b hover:bg-gray-100 transition duration-200"
                            >
                                <td className="py-3 px-6">{user.name}</td>
                                <td className="py-3 px-6">{user.email}</td>
                                <td className="py-3 px-6">{user.address.city}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}