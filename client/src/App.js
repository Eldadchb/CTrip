import "./App.css";
import Dashboard from "./views/dashboard-page.js";
import { useLoadScript } from "@react-google-maps/api";
import { GOOGLE_MAPS_API_KEY } from "./google-maps-api-key";
import NavBar from "./components/nav-bar";
import { ChakraProvider, Spinner } from "@chakra-ui/react";
import theme from "./styles/theme";

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
        <Dashboard />
      </ChakraProvider>
    </>
  );
}

export default App;
