import { ContactRoundIcon} from "lucide-react";
import Login from "./component/Login";

export default function AdminLogin() {
    return (
        <div className="bg-blue-100 h-screen w-screen flex justify-center items-center">
            <div className="bg-white    flex justify-center items-center shadow-lg rounded-md">
                <div className="flex justify-center items-center h-full w-full p-3">
                    <ContactRoundIcon className="" width={250} height={250} />
                </div>
                <div className=" p-5">
                    <form action="/admin" className="">
                        <h1 className="text-center text-2xl mb-3 font-bold">Admin Login</h1>
                       <Login/>
                    </form>
                </div>
            </div>
        </div>
    )
}