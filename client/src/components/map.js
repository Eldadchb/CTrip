import {
  GoogleMap,
  Circle,
  Marker,
  DirectionsRenderer,
  MarkerClusterer,
} from "@react-google-maps/api";
import { useState, useMemo, useCallback, useRef } from "react";

function Map() {
  const center = useMemo(() => ({ lat: 52.52, lng: 13.405 }), []);

  return (
    <div className="map">
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName={"map-container"}
      />
    </div>
  );
}

export default Map;
