export default function ForgetPassword(){
    return(
        <div className="h-screen w-screen bg-blue-100 flex justify-center items-center">
            <form className="bg-white rounded shadow-lg p-5">
                <h1 className="text-2xl font-bold text-center mb-5">Forget Password</h1>
                <div className="flex flex-col">
                    <label htmlFor="">Enter Registered Email</label>
                    <input type="email" name="" id="" className="w-100 border outline-blue-500 rounded px-2 py-1"/>
                    <button className="w-100  bg-green-500 p-1 rounded mt-3 text-white cursor-pointer">Send OTP</button>
                </div>
            </form>
        </div>
    )
}