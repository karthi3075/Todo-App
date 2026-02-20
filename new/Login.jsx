export default function Login() {
    return (
        <div className="gap-2 flex flex-col">
            <div className="flex flex-col gap-1">
                <label htmlFor="username" className="font-semibold text-lg">Enter Username</label>
                <input type="text" name="username" className="w-60 border rounded px-3 py-1" />
                {/* <p className="text-sm text-red-500">this fidel</p> */}
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="password" className="font-semibold text-lg">Enter Password</label>
                <input type="text" name="password" className="w-60 border rounded px-3 py-1" />
                {/* <p className="text-sm text-red-500">this fidel</p> */}
            </div>
            <input type="submit" value="Login" className="cursor-pointer w-full bg-green-400 text-white rounded p-1" />
        </div>
    )
}