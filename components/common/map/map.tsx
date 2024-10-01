import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// Set map container styles
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

// Set center of the map
const center = {
  lat: 40.712776, // Latitude of New York City (example)
  lng: -74.005974, // Longitude of New York City (example)
};

// Set zoom level
const options = {
  disableDefaultUI: true, // Disable default UI like zoom and compass
  zoomControl: true, // Show zoom controls
};

const MapComponent = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Use your API key here
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={12} // Zoom level
      center={center} // Center the map at the defined coordinates
      options={options} // Apply map options
    >
      {/* Add a Marker to the map */}
      <Marker position={center} />
    </GoogleMap>
  );
};

export default MapComponent;
