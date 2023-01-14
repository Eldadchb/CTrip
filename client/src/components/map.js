import { Box } from "@chakra-ui/react";
import {
  GoogleMap,
  Circle,
  Marker,
  DirectionsRenderer,
  MarkerClusterer,
} from "@react-google-maps/api";
import { useState, useMemo, useCallback, useRef } from "react";
import AutoCompleteSearchBar from "./auto-complete-bar";
import SideBar from "./side-bar";

function Map() {
  const mapRef = useRef();

  const center = useMemo(() => ({ lat: 52.52, lng: 13.405 }), []);
  const initialFunc = useCallback((map) => (mapRef.current = map), []);

  const [startingPoint, setStartingPoint] = useState();

  return (
    <>
      <Box className="controlers">
        <AutoCompleteSearchBar
          setStartingPoint={(point) => {
            setStartingPoint(point);
            mapRef.current.panTo(point);
          }}
        />
        <SideBar />
      </Box>

      <Box className="map">
        <GoogleMap
          zoom={14}
          center={center}
          mapContainerClassName={"map-container"}
          onLoad={initialFunc}
        />
      </Box>
    </>
  );
}

export default Map;
