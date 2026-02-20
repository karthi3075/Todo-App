import { ContactRoundIcon} from "lucide-react";
import Login from "./component/Login";

export default function UserLogin() {
    return (
        <div className="bg-blue-100 h-screen w-screen flex justify-center items-center">
            <div className="bg-white flex justify-center items-center shadow-lg rounded-md">
                <div className="md:hide flex justify-center items-center h-full w-full p-3">
                    <ContactRoundIcon className="" width={250} height={250} />
                </div>
                <div className=" p-5">
                    <form action="/user" className="">
                        <h1 className="text-center text-2xl mb-3 font-bold">User Login</h1>
                        <Login/>
                        <div className="flex flex-col mt-3 text-blue-600">
                            <a href="">I dont have an account</a>
                            <a href="">forgt password</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}