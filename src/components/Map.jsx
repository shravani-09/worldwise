import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { MapContainer, Marker, TileLayer, Popup, useMap } from "react-leaflet";
import { useState } from "react";
import { useCities } from "../contexts/CitiesContext";

import PropTypes from "prop-types";

//PropTypes

ChangeCenter.propTypes = {
  position: PropTypes.array,
};

function Map() {
  const [searchParam, setSearchParam] = useSearchParams();
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const { cities } = useCities();
  // const navigate = useNavigate();
  const mapLat = searchParam.get("lat");
  const mapLng = searchParam.get("lng");
  console.log(setMapPosition);
  console.log(setSearchParam);
  return (
    <div className={styles.mapContainer}>
      {/* onClick={() => navigate("form")}> */}
      <MapContainer
        center={mapPosition}
        //center={[mapLat, mapLng]}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={[mapLat || 40, mapLng || 0]} />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

export default Map;
