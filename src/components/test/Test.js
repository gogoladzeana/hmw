const Test =({list})=>{
    
    return(
        <div>
            {list}
            <input type="text"/>
            <button onClick={()=>alert(2)} >click</button>
            
        </div>
    )
}
export default Test