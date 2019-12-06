import React from 'react';
import { environment } from './environment'
import './map.css';

class Map extends React.Component {
    src = ""
    queryParams = ""
    chooseMode() {
        this.src = "https://www.google.com/maps/embed/v1/";
        switch (this.props.mode) {
            case 0:
            default:
                this.streetViewMode()
                break;
            case 1:
                this.viewMode();
                break;
            case 2:
                this.searchMode()
                break;
        }
        console.log(this.props.ipData.latitude)
        this.src += "?key=" + environment.googleApiKey + this.queryParams;
    }

    location = (this.props.ipData.latitude || '32.07') + ',' + (this.props.ipData.longitude || '34.79')
    viewMode() {
        this.src += "view"
        this.queryParams = "&center=" + this.location + "&zoom=12&maptype=satellite"
    }
    streetViewMode() {
        this.src += "streetview";
        this.queryParams = "&location=" + this.location + "&heading=210&pitch=10&fov=35";
    }
    searchMode() {
        this.src += "search";
        this.queryParams = "&&q=mcdonald's+in+" + (this.props.ipData.city || 'tel+aviv');
    }
    render() {
        this.chooseMode();
        return (
            <div>
                <div className="iframe-container">
                    <iframe
                        title="display_map"
                        frameBorder="0" style={{ border: "0" }}
                        src={this.src} allowFullScreen>
                    </iframe>
                </div>
                <p>
                    Are you currently in {this.props.ipData.city}, {this.props.ipData.country_name}?
            <br></br>
                    Well, your ISP thinks you are.
            </p>
            </div>
        );
    }
}

export default Map;