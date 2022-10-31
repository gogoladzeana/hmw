import React, {useState} from "react";
import Component1 from "./Component1";

const Component2 = ()=>{
    const[length, setLength] = useState("");
    return(
        <>
        <Component1 text={['text1','text2']}/>
         {/* <h2>meore komponenti</h2> */}
         <input onInput={(e)=>{
            let length = e.target.value.length
            setLength(length)
         }} type='text'></input>

         <h2>{length}</h2>
        </>
    )
}
export default Component2;  