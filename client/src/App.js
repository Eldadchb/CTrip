import "./App.css";
import Dashboard from "./views/dashboard-page.js";
import { useLoadScript } from "@react-google-maps/api";
import { GOOGLE_MAPS_API_KEY } from "./google-maps-api-key";
import ToolBar from "./components/tool-bar";
import { ChakraProvider, Spinner } from "@chakra-ui/react";

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <Spinner size={"xl"} />;

  return (
    <>
      <ChakraProvider>
        <ToolBar />
        <Dashboard />
      </ChakraProvider>
    </>
  );
}

export default App;
