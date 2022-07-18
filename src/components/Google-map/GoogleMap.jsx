import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const GoogleMap = () => {
    const defaultProps = {
        center: {
            lat: -38.14529622668046,
            lng: 145.1579439975354
        },
        zoom: 20
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '400px', width: '700px' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={-38.14529622668046}
                    lng={145.1579439975354}
                    text="School"
                />
            </GoogleMapReact>
        </div>
    );
}