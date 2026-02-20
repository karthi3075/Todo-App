import { Edit, Trash2, Upload } from "lucide-react";
import { useState } from "react"

export default function Todo() {
    const [item, setItem] = useState("");
    const [data, setData] = useState([]);
    const [edit, setEdit] = useState(null);
    const [editItem, setEditItem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (item.trim()) {
            setData((prev) => ([...prev, item]));
            setItem("");
        }
    }

    const handleDelete = (id) => {
        setData(data.filter((item, index) => index != id))
    }

    const handleEdit = () => {
        if (editItem.trim()) {
            setData(
                data.map((item, index) => (
                    index == edit ? editItem : item
                ))
            )
            setEdit(null);
        }
    }

    return (
        <div className="bg-blue-200 min-h-screen max-w-screen pt-30">
            <div className="flex items-center flex-col">
                <form className="bg-white rounded p-5 flex flex-col">
                    <h1 className="font-bold text-3xl mb-5 text-center">Todo App</h1>
                    <input type="text" value={item} onChange={(e) => { setItem(e.target.value) }} className="border w-100 p-2 rounded" placeholder="Please Enter Your Item" />
                    <button type="submit" onClick={handleSubmit} className="cursor-pointer w-100 bg-blue-700 py-2 text-white rounded mt-4">Add Item</button>
                </form>

                <div className="w-90 bg-blue-100 rounded p-5 my-5">
                    {data.length == 0 && <p className="text-white font-bold text-center">Item Not Found</p>}
                    {data.map((item, index) => (
                        <div key={index} className="bg-blue-300 text-white p-2 rounded my-2 h-full flex justify-between font-bold">
                            {index == edit ?
                                <>
                                    <input value={editItem} onChange={(e) => setEditItem(e.target.value)} className="border border-black focus:border-2 rounded px-1 focus:outline-none w-70" />
                                    <Upload onClick={handleEdit} className="text-green-600 cursor-pointer ml-4" />
                                </> :
                                <>
                                    <p>{item}</p>

                                    <div className="flex gap-3">
                                        <Edit onClick={() => { setEdit(index); setEditItem(item) }} className="text-blue-700 cursor-pointer" />
                                        <Trash2 onClick={() => { handleDelete(index) }} className="text-red-600 cursor-pointer" />
                                    </div>
                                </>
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}