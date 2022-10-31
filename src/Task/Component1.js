import React from "react";

const Component1 = (props)=>{
    // console.log(props, 'esaa')
    return(
        <>
         {
            props.text.map((e,i)=>{
                return(
                    <p key={i}>{e}</p>
                )
            })
         }
        </>
    )
}
export default Component1;