export default function UserRegistration(){
    return(
        <div className="bg-blue-100 min-h-screen w-screen py-10 md:p-0 flex justify-center md:items-center">
            <form action="#" className="p-5 bg-white rounded shadow-lg flex flex-col gap-5 md:grid md:grid-cols-2">
                <h1 className="text-2xl font-bold text-center mb-4 col-span-2">User Registration</h1>
                <div className="flex flex-col gap-1">
                    <label htmlFor="">Enter Name</label>
                    <input type="text" className="w-75 md:w-100 border rounded p-1 outline-blue-500" />
                    <p className="text-sm text-red-500">jfldkf</p>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="">Enter Mobile Number</label>
                    <input type="text" className="w-75 md:w-100 border rounded p-1 outline-blue-500"/>
                    <p className="text-sm text-red-500">jfldkf</p>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="">Enter Email</label>
                    <div className="flex justify-between">
                        <input type="text" className="w-50 md:w-75 border rounded p-1 outline-blue-500"/>
                        <button className="bg-blue-500 p-1 rounded text-white">send otp</button>
                    </div>
                    <p className="text-sm text-red-500">jfldkf</p>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="">Enter OTP received in email</label>
                    <input type="text" className="w-75 md:w-100 border rounded p-1 outline-blue-500"/>
                    <p className="text-sm text-red-500">jfldkf</p>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="">Enter Password</label>
                    <input type="text" className="w-75 md:w-100 border rounded p-1 outline-blue-500"/>
                    <p className="text-sm text-red-500">jfldkf</p>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="">Confirm Password</label>
                    <input type="text" className="w-75 md:w-100 border rounded p-1 outline-blue-500"/>
                    <p className="text-sm text-red-500">jfldkf</p>
                </div>
                <input type="submit" value="Register" className="cursor-pointer bg-green-500 p-1 text-white rounded col-span-2" />
            </form>
        </div>
    )
}