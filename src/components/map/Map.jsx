import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.scss";

export const Map = () => {
  const position = [45.4972159, -73.6103642]; // [latitude, longitude]
  const zoomLevel = 13;

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
