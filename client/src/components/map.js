import { Box } from "@chakra-ui/react";
import { GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";
import { useState, useMemo, useCallback, useRef, useContext } from "react";
import AutoCompleteSearchBar from "./auto-complete-bar";
import SideBar from "./side-bar";
import UserDataContext from "../usersData/userContext";


function Map() {

  const [route, setRoute] = useState();
  const [directions, setDirections] = useState();

  const mapRef = useRef();
  const userDataTemp = useContext(UserDataContext)
  const [startingPoint, setStartingPoint] = useState();

  const center = useMemo(() => ({ lat: 52.52, lng: 13.405 }), []);
  const initialFunc = useCallback((map) => (mapRef.current = map), []);
  const onMapClick = (e) => {
    let lat = e.latLng.lat();
    let lng = e.latLng.lng();
    const chosenPoint = { lat, lng };
    console.log(chosenPoint);
    setStartingPoint(chosenPoint);
    handleSavePoint(lat, lng);
  };

  const handleSavePoint = (lat, lng) => {
    userDataTemp['location'] = `${lat},${lng}`;
    console.log(userDataTemp);
  }

  return (
    <>
      <Box className="controlers">
        <AutoCompleteSearchBar
          setStartingPoint={(point) => {
            setStartingPoint(point);
            mapRef.current.panTo(point);
            handleSavePoint(point);
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

          {directions && <DirectionsRenderer directions={directions} />}
          {startingPoint && <Marker position={startingPoint}></Marker>}

        </GoogleMap>
      </Box>
    </>
  );
}

export default Map;
