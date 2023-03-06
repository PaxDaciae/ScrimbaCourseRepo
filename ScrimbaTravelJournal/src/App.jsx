import Navbar from "../Components/Navbar"
import Location from "../Components/Location"
import ButtonTest from "../Components/ButtonTest"

import data from "../src/assets/data.js"
import './App.css'

function App() {
    // console.log(data)
    // const count = data.map(location => {console.log("location", location)})
    const locations = data.map(item => { 
        return (
            <Location 
                key = {item.id}
                item = {item}
            />
        )
    })

  return (
    <div className = "App">
        <Navbar />
        <div className = "spacer--block">
        </div>
        
        <div className = "locations--block">
            {locations}
        </div>
        <ButtonTest id = {1}/>
        <ButtonTest id = {2}/>
       
    </div>

  )
}
export default App
