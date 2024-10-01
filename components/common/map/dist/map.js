"use strict";
exports.__esModule = true;
var react_1 = require("react");
var api_1 = require("@react-google-maps/api");
// Set map container styles
var mapContainerStyle = {
    width: "100vw",
    height: "100vh"
};
// Set center of the map
var center = {
    lat: 40.712776,
    lng: -74.005974
};
// Set zoom level
var options = {
    disableDefaultUI: true,
    zoomControl: true
};
var MapComponent = function () {
    var _a = api_1.useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    }), isLoaded = _a.isLoaded, loadError = _a.loadError;
    if (loadError)
        return react_1["default"].createElement("div", null, "Error loading maps");
    if (!isLoaded)
        return react_1["default"].createElement("div", null, "Loading Maps...");
    return (react_1["default"].createElement(api_1.GoogleMap, { mapContainerStyle: mapContainerStyle, zoom: 12, center: center, options: options },
        react_1["default"].createElement(api_1.Marker, { position: center })));
};
exports["default"] = MapComponent;
