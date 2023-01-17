import Map from "../components/map";
import NavBar from "../components/nav-bar";
import { useContext } from "react";
import UserDataContext from "../usersData/userContext";
import { Box } from "@chakra-ui/react";
import { GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";

function RoutePage() {
  const userDataTemp = useContext(UserDataContext);
  console.log(userDataTemp); //TODO delete

  








  return (
    <>
      <div className="container">
        <Map />
      </div>      {/* <Box className="map">
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
      </Box> */}
    </>
  );
}

export default RoutePage;
