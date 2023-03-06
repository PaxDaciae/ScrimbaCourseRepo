import React from "react"

export default function Location(props){
    let dateProvided

    if((props.item.date.start && props.item.date.end)) {
            dateProvided = `${props.item.date.start} - ${props.item.date.end}`;
        } else {
            dateProvided = "No Date Provided";
        }

    // console.log("props", props)
    return(
        <div className = "location--card">
            <div>
                <img src = {`../images/${props.item.image}`} className = "location--photo"></img>
            </div>
                <div className = "location--card--info">
                    <div className = "location--holder">
        
                        <i className="fa-sharp fa-solid fa-location-dot fa-xs"></i>
                        <p className = "location--country">{props.item.country.toUpperCase()}</p>
                        <a href={props.item.locationLink} className="location--link">View on Google Maps</a>

                    </div>

                    <h2 className = "location--name">{props.item.name}</h2>
                    <div className = "location--date">
                        <span>
                            <p>{dateProvided}</p>
                        </span>
                        <span>
                            {props.item.date.ongoing && <p className = "ongoingStatus">(Ongoing)</p>}
                        </span>
            
                    </div>
                    <p className = "location--description">{props.item.description}</p>
                </div>
                
        </div>
        
    )
}

/*
<span>
                            {(props.item.date.start && props.item.date.end) && <p>{`${props.item.date.start} - ${props.item.date.end}`}</p>}
                        </span>
                        <span>
                            {!(props.item.date.start && props.item.date.end) && <p className = "noDate">No Date Provided</p>}
                        </span>
                        <span>
                            {props.item.date.ongoing && <p className = "ongoingStatus">Ongoing</p>}
                        </span>
*/