import "./btn.css"

function btn({params,name}) {
    return (
        <>
         <button onClick={()=>{params()}} >{name}</button>
        </>
    )
   
}

export default btn