import { Box } from "@chakra-ui/react";
import { GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";
import { useState, useMemo, useCallback, useRef } from "react";
import AutoCompleteSearchBar from "./auto-complete-bar";
import SideBar from "./side-bar";

function Map() {
  const mapRef = useRef();
  const [startingPoint, setStartingPoint] = useState();

  const center = useMemo(() => ({ lat: 52.52, lng: 13.405 }), []);
  const initialFunc = useCallback((map) => (mapRef.current = map), []);
  const onMapClick = (e) => {
    let lat = e.latLng.lat();
    let lng = e.latLng.lng();
    const chosenPoint = { lat, lng };
    setStartingPoint(chosenPoint);
  };

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
          onClick={onMapClick}
        >
          {startingPoint && <Marker position={startingPoint}></Marker>}
        </GoogleMap>
      </Box>
    </>
  );
}

export default Map;
