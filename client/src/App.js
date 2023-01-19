import "./App.css";
import MainPage from "./views/main-page";
import { useLoadScript } from "@react-google-maps/api";
import { GOOGLE_MAPS_API_KEY } from "./google-maps-api-key";
import { Spinner } from "@chakra-ui/react";
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider, Divider } from "@chakra-ui/react";
import theme from './styles/theme'
import NavBar from "./components/nav-bar";
import UserDataContext from "./usersData/userContext";


function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });
  const USER_DATA_OBJ = {
    'location': false,
    'radius': false,
    'type': false,
    'keyword': false,
  };

  if (!isLoaded) return <Spinner size={"xl"} />;

  return (
    <>
      <ChakraProvider theme={theme}>
        <UserDataContext.Provider value={USER_DATA_OBJ}>
          <NavBar />
          <Divider borderWidth="1%" />
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </UserDataContext.Provider>
      </ChakraProvider>
    </>
  );
};

export default App;
