import { useColorMode, Button, Box, Divider } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useState } from "react";
import AutoComplete from "./auto-complete-bar";

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box className="nav-bar" display="flex">
        <Box
          className="app-title"
          width="50%"
          height="100%"
          display="flex"
          alignItems="center"
          letterSpacing="wide"
          fontSize="3xl"
          paddingLeft="1%"
        >
          CTrip
        </Box>

        <Box
          className="theme-mode-button"
          width="50%"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          paddingRight="1%"
        >
          <Button onClick={toggleColorMode} colorScheme="teal" size="lg">
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Box>
      </Box>
    </>
  );
}
export default NavBar;
