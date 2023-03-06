import React from "react"


export default function Input(){
    return (
        <div className = "input--master--container">
            <div className = "input--container">
                <div className = "input--flex">
                    <form className = "meme--text" id = "top-text">
                            <input type = "text" name = "text-box" className = "input-box" placeHolder = "text"></input>
                    </form>
                    <form className = "meme--text" id = "bottom-text">
                            <input type = "text" name = "text-box" className = "input-box" placeHolder = "text"></input>
                    </form>
                </div>

            <div className = "input--button">
                <button type = "button" className = "meme--gen--button">Get a new meme image</button>
            </div>
        </div>
        </div>
        
    )
}