import React from "react"
import logoImage from "../../public/Images/logo.png"

export default function Header(){
    return (
        <div className = "header--bar">
            <div className = "header--title--holder">
                <img className = "header--logo--image" src = {logoImage}></img>
                <h2>Meme Generator</h2>
            </div>
            <div className = "header--project">
                <p>React Course - Project 3</p>
            </div>

        </div>
    )
}