import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import "./Map.scss";


const Map: React.FC = () => {
  const position: [number, number] = [45.4972159, -73.6103642]; // [latitude, longitude]
  const zoomLevel: number = 13;

  return (
    <MapContainer center={position} zoom={zoomLevel} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
