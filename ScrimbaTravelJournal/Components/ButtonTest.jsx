import React from "react"

export default function ButtonTest(props){

    function handleClick(){
        // console.log("Click")
        console.log(props, typeof(props), typeof(props.id))

        const element = document.getElementById(`${props.id}`)
            // element.style.backgroundColor = "green";
        console.log(element.classList)
        // console.log("TYPE_CHK", typeof(element.classList), ...element.classList)
        // console.log("TST", element.classList)
        element.classList.toggle("restricted")

        element.classList.toggle("expanded")

    }
    return(
        <div className = "buttonTest">
            <div className = "testContainer restricted" id = {props.id}></div>
            <button type = "button" onClick ={handleClick}>PressMe!</button>
            <p> bottan </p>
        </div>
    )
}