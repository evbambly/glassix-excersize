import React from 'react';
import { environment } from './environment'
import './map.css';

export default function Map(props) {
    let src = "https://www.google.com/maps/embed/v1/";
    let queryParams = ""
    let location = (props.ipData.latitude || '32.07') + ',' + (props.ipData.longitude || '34.79')
    switch (props.mapMode) {
        case "streetview":
            src += "streetview";
            queryParams = "&location=" + location + "&heading=210&pitch=10&fov=35"
            break;
        case "view":
            src += "view";
            queryParams = "&center=" + location + "&zoom=12&maptype=satellite"
            break;
        case "search":
        default:
            src += "search";
            queryParams = "&&q=mcdonald's+in+" + (props.ipData.city || 'tel+aviv')
            break;
    }
    src += "?key=" + environment.googleApiKey + queryParams;
    return (
        <div className="map">
            <div className="iframe-container">
                <iframe
                    title="display_map"
                    frameBorder="0" style={{ border: "0" }}
                    src={src} allowFullScreen>
                </iframe>
            </div>
            <p>
                Are you currently in {props.ipData.city}, {props.ipData.country_name}?
            <br></br>
                Well, your ISP thinks you are.
            </p>
        </div>
    );
}