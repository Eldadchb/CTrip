import {
  GoogleMap,
  Circle,
  Marker,
  DirectionsRenderer,
  MarkerClusterer,
} from "@react-google-maps/api";
import { useState, useMemo, useCallback, useRef } from "react";
import Map from "../components/map";

function Dashboard() {
  return (
    <div className="container">
      <div className="controlers"></div>
      <Map />
    </div>
  );
}

export default Dashboard;
