import React from "react"

export default function Card(props){
    return (
        <div className="card">
            <img className="card--image" src={props.item.imageUrl} alt="location-image" />
            <div className="card--info">
                <div className="card--location">
                    <img className="card--location-icon" src="/assets/location.png" alt="location-pin-icon" />
                    <p>{props.item.location.toUpperCase()}</p>
                    <a href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h2 className="card--title">{props.item.title}</h2>
                <h4 className="card--date">{props.item.startDate} - {props.item.endDate}</h4>
                <p className="card--desc">{props.item.description}</p>
            </div>
        
        </div>
    )
}