import Child from "./Child";

export default function Parent(){
    const name="karthi";
    return(
        <div>
            <Child name={name}/>
        </div>
    )
}