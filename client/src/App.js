import "./App.css";
import Dashboard from "./views/dashboard-page.js";
import { useLoadScript } from "@react-google-maps/api";
import { GOOGLE_MAPS_API_KEY } from "./google-maps-api-key";
import NavBar from "./components/nav-bar";
import { ChakraProvider, Spinner, Divider } from "@chakra-ui/react";
import theme from "./styles/theme";
import { Route, Routes } from "react-router-dom";
import ChoosingResturants from "./views/choosing-resturant-page";

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <Spinner size={"xl"} />;

  return (
    <>
      <ChakraProvider theme={theme}>
        <NavBar />
        <Divider borderWidth="1%"/>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/resturants" element={<ChoosingResturants />} />
          <Route path="/saved_trips" element={<ChoosingResturants />} /> 
        </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;
